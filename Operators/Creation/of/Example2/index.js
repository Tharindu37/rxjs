"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Emitting an object, array, and function
// RxJS v6+
var rxjs_1 = require("rxjs");
// emits values of any type
var source = (0, rxjs_1.of)({ name: "Tharindu" }, [1, 2, 3], function hello() { return "Hello"; });
// output: {name: "Tharindu"}, [1,2,3], function hello() { return "Hello" }
var subscribe = source.subscribe(function (val) { return console.log(val); });
