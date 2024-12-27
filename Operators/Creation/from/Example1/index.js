"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
var rxjs_1 = require("rxjs");
// emit array as a sequence of values
var arraySource = (0, rxjs_1.from)([1, 2, 3, 4, 5]);
// output: 1,2,3,4,5
var subscribe = arraySource.subscribe(function (val) { return console.log(val); });
