import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
	PreloadAllModules,
	provideRouter,
	Routes,
	withComponentInputBinding,
	withInMemoryScrolling,
	withPreloading,
	withRouterConfig,
} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './loaders/spinner.component';
import { ProgressBarComponent } from './loaders/progress-bar.component';

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
export const appConfig: ApplicationConfig = {
	providers: [
		importProvidersFrom(BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule),
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
			}),
		),
	],
};
