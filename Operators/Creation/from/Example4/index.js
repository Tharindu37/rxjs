"use strict";
// Observable from string
// RxJS v6+
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
// emit string as a sequence of values
var source = (0, rxjs_1.from)("Hello World");
// output: 'H','e','l','l','o',' ','W','o','r','l','d'
var subscribe = source.subscribe(function (val) { return console.log(val); });
