// Combining observables emitting at 3 intervals
// RxJS v6+
import { timer, combineLatest } from "rxjs";

// timeOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000)

// when one timer emits, emit the latest values from each timer as an array
combineLatest(timerOne$, timerTwo$, timerThree$).subscribe(([timerValOne, timerValTwo, timerValThree])=>{
    /*
    Example
    timerThree first tick: 'Timer One Latest: 0, Timer Two Latest: 0, Timer Three Latest: 0
    timerOne first tick: 'Timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
    timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest: 1, Timer Three Latest: 0
    */
    console.log(
        `Timer One Latest: ${timerValOne},
       Timer Two Latest: ${timerValTwo},
       Timer Three Latest: ${timerValThree}`
      );

})