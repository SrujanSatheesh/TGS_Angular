import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  myTimerSubscription: Subscription;
  minutes = 9;
  seconds = 60;

  minutesStr;
  secondsStr;

  constructor() { }

  ngOnInit(): void {

      //timer called every second
      this.myTimerSubscription = interval(1000).subscribe(x => {
        this.timerFunction();
      });
      
   }

   timerFunction(){
      this.seconds = this.seconds - 1;
      if(this.seconds == 0){
        this.seconds = 60;
        this.minutes = (this.minutes - 1);
        if(this.minutes <= -1){
          this.seconds = 0;
          this.minutes = 0;
          this.myTimerSubscription.unsubscribe();
        }
      }

      this.minutesStr = (this.minutes < 10 ) ? "0" + this.minutes.toString() : this.minutes.toString();
      this.secondsStr = (this.seconds < 10 ) ? "0" + this.seconds.toString() : this.seconds.toString();
      
   }

}
