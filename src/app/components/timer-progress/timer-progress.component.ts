import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { faPause, faPlay, faRedoAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { environment } from 'src/environments/environment';
import { ProgressCounter } from 'src/app/models/progress-counters.model';
import { formatMilliseconds } from 'src/app/utilities/formatMiliseconds';

@Component({
	selector: 'app-timer-progress',
	templateUrl: './timer-progress.component.html',
	styleUrls: ['./timer-progress.component.scss']
})
export class TimerProgressComponent implements OnInit {
	time: number = 0;
	acumulator;
	formatMilliseconds = formatMilliseconds;
	icons = {
		faStopwatch: faStopwatch,
		faPause: faPause,
		faPlay: faPlay,
		faReload: faRedoAlt,
	};
	paused = false;
	@Input() counters: ProgressCounter;
	get success(): number {
		const rate = Math.floor(this.counters.correct * 100 / this.counters.outOf);
		if (rate === 100) return 100;
		return rate % 100;
	}
	get failed(): number {
		const rate = Math.floor(this.counters.wrong * 100 / this.counters.outOf);
		if (rate === 100) return 100;
		return rate % 100;
	}

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.start();
		if (environment.production) {
			addEventListener('blur', () => { this.pause(); });
			addEventListener('focus', () => { this.start(); });
		}
	}

	start() {
		this.paused = false;
		this.acumulator = setInterval(() => {
			this.time += 200;
		}, 200);
	}

	pause() {
		this.paused = true;
		clearInterval(this.acumulator);
	}

	stop() {
		this.pause();
		this.paused = false;
		this.time = 0;
	}

	reloadPage() {
		const shouldReload = confirm('Are you sure you want to start again?');
		if (shouldReload) {
			this.router.routeReuseStrategy.shouldReuseRoute = function () {
				return false;
			};
			this.router.onSameUrlNavigation = 'reload';
			this.router.navigate(['test']);
		}
	}

}
