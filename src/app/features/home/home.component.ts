import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../shared/components/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, TableComponent],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">Welcome to Our Angular Project</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Project Structure</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Core module: Services and guards</li>
            <li>Shared module: Reusable components and directives</li>
            <li>Features module: Different pages and features</li>
            <li>Standalone components for better modularity</li>
            <li>Tailwind CSS for styling</li>
            <li>Dark/light theme toggle functionality</li>
          </ul>
        </div>

        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Key Features</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Modern Angular practices</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Dark mode support</li>
            <li>Custom error pages</li>
            <li>Scalable and maintainable structure</li>
            <li>Easy to extend and customize</li>
          </ul>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Project Overview</h2>
        <div class="overflow-x-auto">
          <pre class="text-sm text-gray-600 dark:text-gray-300">
src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   └── guards/
│   ├── shared/
│   │   ├── components/
│   │   └── directives/
│   ├── features/
│   │   ├── home/
│   │   └── error-pages/
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── styles/
└── index.html
          </pre
          >
        </div>
      </div>

      <div class="text-center">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Error Page Examples</h2>
        <div class="flex justify-center space-x-4">
          <a
            routerLink="/errors/404"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            View 404 Page
          </a>
          <a
            routerLink="/errors/500"
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            View 500 Page
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      pre {
        white-space: pre-wrap;
        word-wrap: break-word;
      }
    `,
  ],
})
export class HomeComponent {}
