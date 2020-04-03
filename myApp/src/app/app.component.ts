import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';

  users = [
    {
      id: 1, name: { first: 'Ben', last: 'Lesh' }
    },
    {
      id: 2, name: { first: 'Jay', last: 'Phelps' }
    }
  ];

  users$ = from(this.users);

  firstName$ = this.users$.pipe(
    map(user => user?.name?.first)
  );

  lastName$ = this.users$.pipe(
    map(user => user?.name?.last)
  );
}
