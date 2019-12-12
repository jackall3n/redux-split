import { Action, Reducer } from 'redux';

function splitReducers<S, A extends Action>(reducers: Array<(state: S, action: A) => S>, initialState: S): Reducer<S, A> {
  return function splitReducer(state: S = initialState, action: A) {
    return reducers.reduce((reducerState, reducer) => reducer(reducerState, action), state);
  }
}

export default splitReducers;
