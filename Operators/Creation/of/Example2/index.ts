// Emitting an object, array, and function
// RxJS v6+
import { of } from "rxjs";
// emits values of any type
const source = of({ name:"Tharindu"},[1,2,3], function hello(){return "Hello"});
// output: {name: "Tharindu"}, [1,2,3], function hello() { return "Hello" }
const subscribe = source.subscribe(val => console.log(val));