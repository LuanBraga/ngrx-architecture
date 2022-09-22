import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {

  constructor(private store: Store<{ app: IAppState }>) { }

  counter$ = 
    this.store.select('app')
    .pipe(
      map(e => e.counter)
    );

  ngOnInit(): void {
  }

}
