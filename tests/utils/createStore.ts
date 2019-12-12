import { createStore, Reducer, Action } from "redux";

type AppState = {

}

type AppActions = Action;

export default <S, A extends Action>(reducers: Reducer<S, A>) => {
  return createStore(reducers);
}
