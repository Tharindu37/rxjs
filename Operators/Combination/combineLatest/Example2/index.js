"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// CombineLatest with projection function
// RxJS v6+
var rxjs_1 = require("rxjs");
var timerOne$ = (0, rxjs_1.timer)(1000, 4000);
var timerTwo$ = (0, rxjs_1.timer)(2000, 4000);
var timerThree$ = (0, rxjs_1.timer)(3000, 4000);
(0, rxjs_1.combineLatest)(timerOne$, timerTwo$, timerThree$, 
// combineLatest also takes an optional projection function
function (one, two, three) {
    return "Timer One (Proj) Latest: ".concat(one, ",\n        Timer Two (Proj) Latest: ").concat(two, ",\n        Timer Three (Proj) Latest: ").concat(three);
}).subscribe(console.log);
