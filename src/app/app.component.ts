import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { decrementsCounter, IAppState, incrementsCounter } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store: Store<{ app: IAppState }>){}

  counter$ = this.store
    .select('app')
    .pipe(
      map(e => e.counter)
    );
    
  title = 'ngrx-architecture';

  incrementsCounter() {
    this.store.dispatch(incrementsCounter());
  }

  decrementsCounter() {
    this.store.dispatch(decrementsCounter());
  }
}
