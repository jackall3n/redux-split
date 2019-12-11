import { Action, Reducer } from 'redux';
declare function splitReducers<S, A extends Action>(reducers: Reducer<S, A>[]): (state: S, action: A) => S;
export default splitReducers;
