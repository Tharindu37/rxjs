"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// timer emits after 1 second, then every 2 seconds
// RxJS v6+
var rxjs_1 = require("rxjs");
/*
timer takes a second argument, how often to emit subsequent values in this case we will emit first value after 1 second and subsequent values every 2 seconds after
*/
var source = (0, rxjs_1.timer)(1000, 2000);
// output: 0, 1, 2, 3, 4, 5, ...
var subscribe = source.subscribe(function (val) { return console.log(val); });
