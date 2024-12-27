"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Add 10 to each value
// RxJs v6+
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// emit (1,2,3,4,5)
// const source = from([1, 2, 3, 4, 5]);
var source = (0, rxjs_1.of)(1, 2, 3, 4, 5);
// add 10 to each value
var example = source.pipe((0, operators_1.map)(function (val) { return val + 10; }));
// output: 11,12,13,14,15
var subscribe = example.subscribe(function (val) { return console.log(val); });
