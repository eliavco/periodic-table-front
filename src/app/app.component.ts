import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { isDesktop } from './utilities/deviceType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'bismuth';
	icons = {
		faCoffee
	}
	isDesktop = isDesktop();
	
	constructor(private updates: SwUpdate) {
		updates.available.subscribe(event => { 
			updates.activateUpdate().then(() => { document.location.reload(); });
		});
	}

	ngOnInit() {
		document.getElementById('splash').style.display = 'none';
	}
}
