import { Component } from '@angular/core';
import { DefaultLoaderComponent } from './default-loader.component';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [DefaultLoaderComponent],
  template: `
		<p>
			<ng-template #spinner> Spinner </ng-template>
			<app-loader [selectedTemplate]="spinner"> </app-loader>
		</p>
	`,
  styles: ``,
})
export class SpinnerComponent {}
