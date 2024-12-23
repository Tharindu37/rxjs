"use strict";
// RxJS v6+
// BehaviorSubject with new subscribers created on mouse clicks
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var setElementText = function (elemId, text) {
    return document.getElementById(elemId).innerText = text.toString();
};
var addHtmlElement = function (coords) { return (document.body.innerHTML += "\n    <div \n    id=".concat(coords.id, "\n    style=\"\n      position: absolute;\n      height: 30px;\n      width: 30px;\n      text-align: center;\n      top: ").concat(coords.y, "px;\n      left: ").concat(coords.x, "px;\n      background: silver;\n      border-radius: 80%;\"\n    >\n  </div>\n    ")); };
var subject = new rxjs_1.BehaviorSubject(0);
var click$ = (0, rxjs_1.fromEvent)(document, 'click').pipe((0, operators_1.map)(function (event) { return ({
    x: event.clientX,
    y: event.clientY,
    id: Math.random()
}); }), (0, operators_1.tap)(addHtmlElement), (0, operators_1.mergeMap)(function (cords) { return subject.pipe().pipe((0, operators_1.tap)(function (val) { return setElementText(cords.id, val); })); }));
var interval$ = (0, rxjs_1.interval)(1000).pipe((0, operators_1.tap)(function (v) { return subject.next(v); }), (0, operators_1.tap)(function (v) { return setElementText('intervalValue', v); }));
(0, rxjs_1.merge)(click$, interval$).subscribe();
