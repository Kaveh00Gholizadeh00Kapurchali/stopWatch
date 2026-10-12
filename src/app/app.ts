import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Stopwatch } from './stopwatch/stopwatch';

@Component({
  imports: [RouterOutlet, Stopwatch],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('stopWatch');
}
