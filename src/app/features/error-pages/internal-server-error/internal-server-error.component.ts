import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-internal-server-error',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, ButtonComponent],
  template: `
    <div
      class="flex max-w-lg flex-col items-center justify-center gap-2 rounded-lg bg-background p-8 text-center shadow-sm">
      <h1 class="text-4xl font-bold text-foreground">Oops! Server Error</h1>
      <p class="text-base text-muted-foreground">
        Please try again later. If the issue persists, feel free to contact us for assistance.
      </p>
      <app-button (buttonClick)="goToHomePage()" impact="bold" tone="primary" shape="rounded" size="medium">
        Homepage
      </app-button>
      <svg-icon src="assets/illustrations/500.svg" svgClass="w-[300px] h-[300px] text-muted-foreground "> </svg-icon>
    </div>
  `,
})
export class InternalServerErrorComponent {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
