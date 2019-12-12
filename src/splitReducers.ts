import { Action, AnyAction, Reducer } from 'redux';

export type RequiredReducer<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A
) => S

function splitReducers<S, A extends Action>(reducers: Array<Reducer<S, A>>): Reducer<S, A>;
function splitReducers<S, A extends Action>(reducers: Array<RequiredReducer<S, A>>, initialState: S): Reducer<S, A>;
function splitReducers<S, A extends Action>(reducers: Array<Reducer<S, A> | RequiredReducer<S, A>>, initialState?: S): Reducer<S, A> {
  return function splitReducer(state: S | undefined = initialState, action: A) {
    return reducers.reduce((s, reducer) => reducer(s, action), state as S);
  }
}

export default splitReducers;
