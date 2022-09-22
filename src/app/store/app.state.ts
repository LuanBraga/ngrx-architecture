import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState {
    counter: number;
}

export const appInitialState: IAppState = {
    counter: 2,
}

export const incrementsCounter = createAction('[app] Increments counter');
export const decrementsCounter = createAction('[app] Decrements counter');

export const appReducer = createReducer(
    appInitialState, 
    on(incrementsCounter, state => state = { ...state, counter: state.counter +1 }),
    on(decrementsCounter, 
        state => {
            state = {...state, counter: state.counter -1 };
            return state;
        }
    )
);