"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Emitting a sequence of numbers
// RxJS v6+
var rxjs_1 = require("rxjs");
// emits any number of provided values in sequence
var source = (0, rxjs_1.of)(1, 2, 3, 4, 5);
// output: 1,2,3,4,5
var subscribe = source.subscribe(function (val) { return console.log(val); });
