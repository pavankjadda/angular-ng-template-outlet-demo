import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	template: `
		<div style="text-align: center">
			<h1>NG Template Outlet Demo</h1>
			<a routerLink="/spinner">Spinner</a> <br />
			<a routerLink="/progress-bar">Progress Bar</a> <br />
			<router-outlet></router-outlet>
		</div>
	`,
	imports: [RouterModule],
})
export class AppComponent implements OnInit {
	ngOnInit(): void {}
}
