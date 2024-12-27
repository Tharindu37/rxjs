// RxJS v6+
import { Subject } from "rxjs";

const sub = new Subject();

sub.next(1);
sub.subscribe(x=>{
    console.log("Subscriber 1: ", x);   
});

sub.next(2); // OUTPUT => Subscriber 1 2
sub.subscribe(x=>{
    console.log("Subscriber 2: ", x);   
}); 
sub.next(3);// OUTPUT => Subscriber 1 3, Subscriber 2 3 (logged from both subscribers)