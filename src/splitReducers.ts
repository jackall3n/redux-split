import { Action, Reducer } from 'redux';

function splitReducers<S, A extends Action>(reducers: Reducer<S, A>[]) {
  return function splitReducer(state: S, action: A) {
    return reducers.reduce((reducerState, reducer) => reducer(reducerState, action), state);
  }
}

export default splitReducers;
