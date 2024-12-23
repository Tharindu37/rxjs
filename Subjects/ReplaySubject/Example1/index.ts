// RxJs v6+
import { ReplaySubject } from 'rxjs';
const sub = new ReplaySubject(3);

sub.next(1);
sub.next(2);
sub.subscribe(console.log); // Output: 1, 2
sub.next(3); // Output: 3
sub.next(4); // Output: 4
sub.subscribe(console.log); // Output: 2, 3, 4 (log of last 3 values from new subscriber)
sub.next(5); // Output: 5 (log from both subscribers)