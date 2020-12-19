import { from, of } from "rxjs";

of(1, 2, 3).subscribe((res) => {
  console.log(res);
});

from([1, 3, 2]).subscribe((res) => {
  console.log(res);
});
