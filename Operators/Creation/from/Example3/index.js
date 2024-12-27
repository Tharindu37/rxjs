"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Observable from collection
// RxJS v6+
var rxjs_1 = require("rxjs");
// works on js collections
var map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');
var mapSource = (0, rxjs_1.from)(map);
// output: [1, 'Hi'], [2, 'Bye']
var subscribe = mapSource.subscribe(function (val) { return console.log(val); });
