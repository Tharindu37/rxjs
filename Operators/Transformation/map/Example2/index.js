"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// RxJS v6+
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20}, {name: 'Ryan', age: 50})
var source = (0, rxjs_1.from)([
    { name: "Joe", age: 30 },
    { name: "Frank", age: 20 },
    { name: "Ryan", age: 50 }
]);
// grab each persons name, could also use pluck for this scenario
var example = source.pipe((0, operators_1.map)(function (_a) {
    var name = _a.name;
    return name;
}));
// output: "Joe", "Frank", "Ryan"
var subscribe = example.subscribe(function (val) { return console.log(val); });
