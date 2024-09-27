import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-body',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table
      class="table w-full table-auto border-collapse border-0 text-left align-middle leading-5 text-muted-foreground">
      <thead class="border border-muted/20 text-xs text-muted-foreground">
        <tr>
          @for (column of columns; track column) {
            <th class="p-3">{{ column }}</th>
          }
        </tr>
      </thead>
      <tbody>
        @for (row of data; track row) {
          <tr class="hover:bg-card/50" (click)="onRowClick(row)">
            @for (column of columns; track column) {
              <td class="p-3">{{ row[column] }}</td>
            }
          </tr>
        } @empty {
          <tr>
            <td [attr.colspan]="columns.length" class="p-3 text-center">No data available</td>
          </tr>
        }
      </tbody>
    </table>
  `,
})
export class TableBodyComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Output() rowClick = new EventEmitter<any>();

  onRowClick(row: any) {
    this.rowClick.emit(row);
  }
}
