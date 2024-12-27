"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Observable from promise
// RxJS v6+
var rxjs_1 = require("rxjs");
// emit result of promise
var promiseSource = (0, rxjs_1.from)(new Promise(function (resolve) { return resolve("Hello World!"); }));
// output: 'Hello World'
var subscribe = promiseSource.subscribe(function (val) { return console.log(val); });
