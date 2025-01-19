"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Combining observables emitting at 3 intervals
// RxJS v6+
var rxjs_1 = require("rxjs");
// timeOne emits first value at 1s, then once every 4s
var timerOne$ = (0, rxjs_1.timer)(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
var timerTwo$ = (0, rxjs_1.timer)(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
var timerThree$ = (0, rxjs_1.timer)(3000, 4000);
// when one timer emits, emit the latest values from each timer as an array
(0, rxjs_1.combineLatest)(timerOne$, timerTwo$, timerThree$).subscribe(function (_a) {
    var timerValOne = _a[0], timerValTwo = _a[1], timerValThree = _a[2];
    /*
    Example
    timerThree first tick: 'Timer One Latest: 0, Timer Two Latest: 0, Timer Three Latest: 0
    timerOne first tick: 'Timer One Latest: 1, Timer Two Latest: 0, Timer Three Latest: 0
    timerTwo first tick: 'Timer One Latest: 1, Timer Two Latest: 1, Timer Three Latest: 0
    */
    console.log("Timer One Latest: ".concat(timerValOne, ",\n       Timer Two Latest: ").concat(timerValTwo, ",\n       Timer Three Latest: ").concat(timerValThree));
});
