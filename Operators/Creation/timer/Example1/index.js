"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// timer emits 1 value then completes
// RxJS v7+
var rxjs_1 = require("rxjs");
// emit 0 after 1 second then complete, since no second argument is supplied
var source = (0, rxjs_1.timer)(1000);
// output: 0
var subscribe = source.subscribe(function (val) { return console.log(val); });
