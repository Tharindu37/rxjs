"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
var rxjs_1 = require("rxjs");
var sub = new rxjs_1.Subject();
sub.next(1);
sub.subscribe(function (x) {
    console.log("Subscriber 1: ", x);
});
sub.next(2); // OUTPUT => Subscriber 1 2
sub.subscribe(function (x) {
    console.log("Subscriber 2: ", x);
});
sub.next(3);
