import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="flex flex-1 items-center justify-center">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ErrorPageComponent {}
