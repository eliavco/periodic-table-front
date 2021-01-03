import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'bismuth';
	icons = {
		faCoffee
	}
	
	constructor(private updates: SwUpdate) {
		updates.available.subscribe(event => { 
			updates.activateUpdate().then(() => { document.location.reload(); });
		});
	}
}
