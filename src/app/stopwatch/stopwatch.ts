import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-stopwatch',
  styleUrl: './stopwatch.css',
  templateUrl: './stopwatch.html',
})
export class Stopwatch {

  time = signal(0);

  interval : any = null;

  start(){
    if(this.interval !== null) return;
    this.interval = setInterval(() =>{
      this.time.update(v => v+1);
    } , 1000);
  }

  stop(){
    if(this.interval === null) return;
    clearInterval(this.interval);

        this.interval = null; 

  }

  reset(){
    this.stop();
    this.time.set(0);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
