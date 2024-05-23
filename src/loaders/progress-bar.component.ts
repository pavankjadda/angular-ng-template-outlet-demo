import { Component } from '@angular/core';
import { DefaultLoaderComponent } from './default-loader.component';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [DefaultLoaderComponent],
  template: `
		<p>
			<ng-template #progressBar> Progress Bar </ng-template>
			<app-loader [selectedTemplate]="progressBar"> </app-loader>
		</p>
	`,
  styles: ``,
})
export class ProgressBarComponent {}
