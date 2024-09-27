import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableToolbarComponent } from './components/table-toolbar/table-toolbar.component';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableHeaderComponent, TableToolbarComponent, TableBodyComponent, TableFooterComponent],
  template: `
    <div class="flex min-w-full flex-col rounded-xl border border-muted/20 bg-background p-2">
      <app-table-header [title]="title" [description]="description" (refresh)="onRefresh()" (addItem)="onAddItem()">
      </app-table-header>

      <app-table-toolbar
        [columns]="columns"
        (search)="onSearch($event)"
        (filter)="onFilter($event)"
        (sort)="onSort($event)">
      </app-table-toolbar>

      <div class="overflow-x-auto">
        <app-table-body [data]="filteredAndSortedData()" [columns]="columns" (rowClick)="onRowClick($event)">
        </app-table-body>
      </div>

      <app-table-footer
        [totalItems]="totalItems()"
        [currentPage]="currentPage()"
        [itemsPerPage]="itemsPerPage()"
        (pageChange)="onPageChange($event)">
      </app-table-footer>
    </div>
  `,
})
export class TableComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() set data(value: any[]) {
    this._data.set(value);
  }
  @Input() set columns(value: string[]) {
    this._columns.set(value);
  }

  @Output() refresh = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<void>();
  @Output() rowClick = new EventEmitter<any>();

  private _data = signal<any[]>([]);
  private _columns = signal<string[]>([]);

  searchTerm = signal('');
  filterCriteria = signal<Record<string, any>>({});
  sortColumn = signal('');
  sortDirection = signal<'asc' | 'desc'>('asc');

  currentPage = signal(1);
  itemsPerPage = signal(10);

  filteredAndSortedData = computed(() => {
    let result = this._data();

    // Apply search
    if (this.searchTerm()) {
      result = result.filter((item) =>
        Object.values(item).some((val) => String(val).toLowerCase().includes(this.searchTerm().toLowerCase())),
      );
    }

    // Apply filters
    Object.entries(this.filterCriteria()).forEach(([key, value]) => {
      result = result.filter((item) => item[key] === value);
    });

    // Apply sort
    if (this.sortColumn()) {
      result.sort((a, b) => {
        if (a[this.sortColumn()] < b[this.sortColumn()]) return this.sortDirection() === 'asc' ? -1 : 1;
        if (a[this.sortColumn()] > b[this.sortColumn()]) return this.sortDirection() === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  });

  totalItems = computed(() => this.filteredAndSortedData().length);

  onRefresh() {
    this.refresh.emit();
  }

  onAddItem() {
    this.addItem.emit();
  }

  onSearch(term: string) {
    this.searchTerm.set(term);
  }

  onFilter(criteria: Record<string, any>) {
    this.filterCriteria.set(criteria);
  }

  onSort(column: string) {
    if (this.sortColumn() === column) {
      this.sortDirection.update((dir) => (dir === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }

  onRowClick(row: any) {
    this.rowClick.emit(row);
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
  }
}
