import { Observable } from "rxjs";

export const getNumbers = new Observable((subscriber) => {
  //We wmit values
  subscriber.next(1); // emits 1
  subscriber.next(2); // emnits 2
  subscriber.next(3); // emits 3
  setTimeout(() => {
    subscriber.next(4); // emits four
    subscriber.complete(); // finally, the Observable completes & finishes
  }, 1000); // waits  1s
});
