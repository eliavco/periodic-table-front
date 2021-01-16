import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private titleService: Title) { }

	ngOnInit(): void {
		this.titleService.setTitle(`${environment.baseName} | Home`);
	}

}
