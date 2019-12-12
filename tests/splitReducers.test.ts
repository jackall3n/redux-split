import { splitReducers } from "../src";
import { combineReducers, Store } from "redux";
import createStore from "./utils/createStore";

describe("splitReducers", () => {
  let store: Store;

  beforeEach(() => {
    const reducer1 = (state: string | undefined, action: any) => {
      return ''
    };
    const reducer2 = (state: string | undefined, action: any) => {
      return ''
    };

    const userReducer = splitReducers([reducer1, reducer2]);

    const rootReducer = combineReducers({
      user: userReducer
    });

    store = createStore(rootReducer);
  });

  it("should", () => {
    expect(store.getState()).toBe('hello');
  });
});
