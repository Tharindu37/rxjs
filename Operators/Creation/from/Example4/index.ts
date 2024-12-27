// Observable from string
// RxJS v6+

import { from } from "rxjs";

// emit string as a sequence of values
const source = from("Hello World");
// output: 'H','e','l','l','o',' ','W','o','r','l','d'
const subscribe = source.subscribe(val => console.log(val));