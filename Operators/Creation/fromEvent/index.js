"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Observable from mouse clicks
// RxJs v6+
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
// create observable that emits click events
var source = (0, rxjs_1.fromEvent)(document, 'click');
// map to string with given event timestamp
var example = source.pipe((0, rxjs_2.map)(function (event) { return "Event time: ".concat(event.timeStamp); }));
// output (example) : 'Event time:  7276.390000000001'
var subscribe = example.subscribe(function (val) { return console.log(val); });
