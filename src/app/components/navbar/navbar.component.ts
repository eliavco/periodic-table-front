import { Component, OnInit } from '@angular/core';
import { faCogs, faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	icons = {
		faSettings: faCogs,
		faHistory: faHistory
	}

	constructor() { }

	ngOnInit(): void {
	}

}
