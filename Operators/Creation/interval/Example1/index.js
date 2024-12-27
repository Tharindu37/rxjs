"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJs v6+
var rxjs_1 = require("rxjs");
// emit value in sequence every 1 second
var source = (0, rxjs_1.interval)(1000);
// output: 0,1,2,3,4,5....
var subscribe = source.subscribe(function (val) { return console.log(val); });
