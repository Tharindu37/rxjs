// Combining events from 2 buttons
// RxJS v6+
import { fromEvent, combineLatest } from "rxjs";
import { mapTo, startWith, scan, tap, map } from "rxjs";