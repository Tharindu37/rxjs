"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJs v6+
var rxjs_1 = require("rxjs");
var sub = new rxjs_1.AsyncSubject();
sub.subscribe(console.log);
sub.next(123); // nothing logged
sub.subscribe(console.log);
sub.next(456); // nothing logged
sub.complete(); // 456, 456 logged by both subscribers
