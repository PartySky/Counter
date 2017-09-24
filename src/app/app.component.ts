import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increment, decrement, reset } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$ = this.store.select('counter');

  constructor(private store: Store<any>) { }

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
