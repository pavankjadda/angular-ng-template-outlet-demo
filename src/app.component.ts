import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from './spinner.component';
import { ProgressBarComponent } from './progress-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  template: `
		<div>
    <a routerLink="/spinner">Spinner</a> <br/>
    <a routerLink="/progress-bar">Progress Bar</a> <br/>
    <router-outlet></router-outlet>
</div>
	`,
  imports: [RouterModule],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
