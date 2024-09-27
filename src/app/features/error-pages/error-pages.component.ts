import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex h-screen w-screen">
      <div class="flex flex-1 items-center justify-center bg-card bg-cover">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class ErrorPageComponent {}
