// import { CommonModule } from '@angular/common';
// import { Component, EventEmitter, Input, Output, computed } from '@angular/core';

// @Component({
//   selector: 'app-table-footer',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <div class="flex flex-wrap items-center justify-between gap-2 py-3 px-5 text-xs text-muted-foreground">
//       <div class="order-2 flex items-center gap-2 md:order-1">
//         Show
//         <select
//           [ngModel]="itemsPerPage"
//           (ngModelChange)="onItemsPerPageChange($event)"
//           class="w-16 rounded-md border border-muted/20 bg-background p-2"
//         >
//           <option value="5">5</option>
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="50">50</option>
//         </select>
//         per page
//       </div>
//       <div class="order-1 flex items-center gap-4 md:order-2">
//         <span>{{ startIndex() }}-{{ endIndex() }} of {{ totalItems }}</span>
//         <div class="inline-flex items-center gap-1">
//           <button
//             (click)="onPreviousPage()"
//             [disabled]="currentPage === 1"
//             class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm disabled:opacity-50"
//           >
//             &lt;
//           </button>
//           @for (page of visiblePages(); track page) {
//             <button (click)="onPageChange(page)" [class.bg-muted-foreground/10]="page === currentPage" class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm hover:bg-muted-foreground/10">
//               {{ page }}
//             </button>
//           }
//           <button
//             (click)="onNextPage()"
//             [disabled]="currentPage === totalPages()"
//             class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm disabled:opacity-50"
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   `,
// })
// export class TableFooterComponent {
//   @Input() totalItems: number = 0;
//   @Input() currentPage: number = 1;
//   @Input() itemsPerPage: number = 10;
//   @Output() pageChange = new EventEmitter<number>();

//   totalPages = computed(() => Math.ceil(this.totalItems / this.itemsPerPage));
//   startIndex = computed(() => (this.currentPage - 1) * this.itemsPerPage + 1);
//   endIndex = computed(() => Math.min(this.currentPage * this.itemsPerPage, this.totalItems));

//   visiblePages = computed(() => {
//     const totalPages = this.totalPages();
//     if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
//     if (this.currentPage <= 3) return [1, 2, 3, 4, 5];
//     if (this.currentPage >= totalPages - 2)
//       return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
//     return [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
//   });

//   onItemsPerPageChange(value: number) {
//     this.itemsPerPage = value;
//     this.pageChange.emit(1);
//   }

//   onPreviousPage() {
//     if (this.currentPage > 1) {
//       this.pageChange.emit(this.currentPage - 1);
//     }
//   }

//   onNextPage() {
//     if (this.currentPage < this.totalPages()) {
//       this.pageChange.emit(this.currentPage + 1);
//     }
//   }

//   onPageChange(page: number) {
//     this.pageChange.emit(page);
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="flex flex-wrap items-center justify-between gap-2 py-3 px-5 text-xs text-muted-foreground">
      <div class="order-2 flex items-center gap-2 md:order-1">
        Show
        <select
          [(ngModel)]="itemsPerPage"
          (ngModelChange)="onItemsPerPageChange($event)"
          class="w-16 rounded-md border border-muted/20 bg-background p-2">
          <option [ngValue]="5">5</option>
          <option [ngValue]="10">10</option>
          <option [ngValue]="20">20</option>
          <option [ngValue]="50">50</option>
        </select>
        per page
      </div>
      <div class="order-1 flex items-center gap-4 md:order-2">
        <span>{{ startIndex() }}-{{ endIndex() }} of {{ totalItems }}</span>
        <div class="inline-flex items-center gap-1">
          <button
            (click)="onPreviousPage()"
            [disabled]="currentPage === 1"
            class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm disabled:opacity-50">
            &lt;
          </button>
          <!-- @for (page of visiblePages(); track page) {
            <button
              (click)="onPageChange(page)"
              [class.bg-muted-foreground/10]="page === currentPage"
              class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm hover:bg-muted-foreground/10"
            >
              {{ page }}
            </button>
          } -->
          <button
            (click)="onNextPage()"
            [disabled]="currentPage === totalPages()"
            class="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-sm disabled:opacity-50">
            &gt;
          </button>
        </div>
      </div>
    </div>
  `,
})
export class TableFooterComponent {
  @Input() totalItems: number = 0;
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Output() pageChange = new EventEmitter<number>();

  totalPages = computed(() => Math.ceil(this.totalItems / this.itemsPerPage));
  startIndex = computed(() => (this.currentPage - 1) * this.itemsPerPage + 1);
  endIndex = computed(() => Math.min(this.currentPage * this.itemsPerPage, this.totalItems));

  visiblePages = computed(() => {
    const totalPages = this.totalPages();
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (this.currentPage <= 3) return [1, 2, 3, 4, 5];
    if (this.currentPage >= totalPages - 2)
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
  });

  onItemsPerPageChange(value: number) {
    this.itemsPerPage = value;
    this.pageChange.emit(1);
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages()) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
