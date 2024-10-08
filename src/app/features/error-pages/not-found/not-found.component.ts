import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, ButtonComponent],
  template: `
    <div
      class="flex max-w-lg flex-col items-center justify-center gap-2 rounded-lg bg-background p-8 text-center shadow-sm">
      <h1 class="text-4xl font-bold text-foreground">Oops!</h1>
      <p class="text-base text-muted-foreground">
        We can't find that page. You can go back to the previous page or go to the homepage.
      </p>
      <app-button (buttonClick)="goToHomePage()" impact="bold" tone="primary" shape="rounded" size="medium">
        Homepage
      </app-button>
      <svg-icon src="assets/illustrations/404.svg" svgClass="w-[300px] h-[300px] text-muted-foreground  "> </svg-icon>
    </div>
  `,
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
