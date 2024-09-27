import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mb-4 flex justify-between">
      <div class="inline-block">
        <h3 class="font-semibold text-foreground">{{ title }}</h3>
        <div class="space-x-1 text-xs font-medium text-muted-foreground">
          {{ description }}
        </div>
      </div>
      <div class="inline-block space-x-4">
        <button
          (click)="refresh.emit()"
          class="flex-none rounded-md bg-muted px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
          Refresh
        </button>
        <button
          (click)="addItem.emit()"
          class="flex-none rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">
          Add Item
        </button>
      </div>
    </div>
  `,
})
export class TableHeaderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() refresh = new EventEmitter<void>();
  @Output() addItem = new EventEmitter<void>();
}
