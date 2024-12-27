"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// emit 1,2,3,4,5
var source = (0, rxjs_1.of)(1, 2, 3, 4, 5);
// take the first emitted value then complete
var example = source.pipe((0, operators_1.take)(1));
// output: 1
var subscribe = example.subscribe(function (val) { return console.log(val); });
