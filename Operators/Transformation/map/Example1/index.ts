// Add 10 to each value
// RxJs v6+
import { from, of } from "rxjs";
import { map } from "rxjs/operators";

// emit (1,2,3,4,5)
 const source = from([1, 2, 3, 4, 5]);
// const source = of(1, 2, 3, 4, 5);
// add 10 to each value
const example = source.pipe(map(val => val + 10));
// output: 11,12,13,14,15
const subscribe = example.subscribe(val => console.log(val));