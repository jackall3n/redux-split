import { splitReducers } from "../src";
import { combineReducers, Store } from "redux";
import createStore from "./utils/createStore";

describe("splitReducers", () => {
  let store: Store;

  beforeEach(() => {
    const reducer1 = (state: string, action: any) => {
      return ''
    };
    const reducer2 = (state: string, action: any) => {
      return ''
    };

    const userReducer = splitReducers([reducer1, reducer1], 'initial-state');

    const rootReducer = combineReducers({
      user: userReducer
    });

    store = createStore(rootReducer);
  });

  it("should", () => {
    expect(store.getState()).toBe('hello');
  });
});
