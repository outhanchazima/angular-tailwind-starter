import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-toolbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          (input)="onSearch($event)"
          class="rounded-md border border-muted/20 bg-background px-3 py-2 text-sm" />
        <select
          (change)="onFilterChange($event)"
          class="rounded-md border border-muted/20 bg-background px-3 py-2 text-sm">
          <option value="">Filter by...</option>
          @for (column of columns; track column) {
            <option [value]="column">{{ column }}</option>
          }
        </select>
      </div>
      <div class="flex items-center space-x-2">
        <select
          (change)="onSortChange($event)"
          class="rounded-md border border-muted/20 bg-background px-3 py-2 text-sm">
          <option value="">Sort by...</option>
          @for (column of columns; track column) {
            <option [value]="column">{{ column }}</option>
          }
        </select>
      </div>
    </div>
  `,
})
export class TableToolbarComponent {
  @Input() columns: string[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() filter = new EventEmitter<Record<string, any>>();
  @Output() sort = new EventEmitter<string>();

  onSearch(event: Event) {
    this.search.emit((event.target as HTMLInputElement).value);
  }

  onFilterChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.filter.emit({ [value]: true });
    } else {
      this.filter.emit({});
    }
  }

  onSortChange(event: Event) {
    this.sort.emit((event.target as HTMLSelectElement).value);
  }
}
