import { Component, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
		<div>
    <hr />
			<ng-template #defaultSelected> Default Loader </ng-template>

			<ng-container [ngTemplateOutlet]="selectedTemplateRef || defaultSelected"> </ng-container>
			
		</div>
	`,
  styles: ``,
})
export class DefaultLoaderComponent {
  @Input('selectedTemplate')
  selectedTemplateRef: TemplateRef<any> | undefined;
}
