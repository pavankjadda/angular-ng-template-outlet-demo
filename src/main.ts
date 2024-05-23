import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import {
  PreloadAllModules,
  RouterLink,
  RouterOutlet,
  Routes,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { SpinnerComponent } from './spinner.component';
import { ProgressBarComponent } from './progress-bar.component';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, RouterLink, RouterOutlet],
  template: `
    <h1>NG Template Outlet Demo</h1>
    <hr/>

    <app-main></app-main>
  `,
})
export class App {
  name = 'Angular';
}

export const routes: Routes = [
  {
    path: 'spinner',
    component: SpinnerComponent,
  },
  {
    path: 'progress-bar',
    component: ProgressBarComponent,
  },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withInMemoryScrolling(),
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
});
