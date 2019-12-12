import { Action, combineReducers, createStore } from "redux";
import splitReducers from "../src/splitReducers";

type AppState = {
  user: UserState
}

type UserState = {
  name: string;
  address: {
    address1: string;
    address2: string;
  };
}

const initialState: UserState = {
  name: '',
  address: {
    address1: '',
    address2: ''
  }
};

interface UserNameUpdateAction extends Action {
  type: "USER_NAME_UPDATE",
  payload: {
    name: string;
  }
}

interface UserAddressUpdateAction extends Action {
  type: "USER_ADDRESS_UPDATE",
  payload: {
    address1: string;
    address2: string;
  }
}

type UserActions = UserNameUpdateAction | UserAddressUpdateAction;

function userInfoReducer(state: UserState, action: UserActions) {
  switch (action.type) {
    case "USER_NAME_UPDATE":
      const { name } = action.payload;
      return { ...state, name };

    default:
      return state;
  }
}

function userAddressReducer(state: UserState, action: UserActions) {
  switch (action.type) {
    case "USER_ADDRESS_UPDATE":
      return { ...state, address: { ...state.address, ...action.payload } };
    default:
      return state;
  }
}

const userReducer = splitReducers([
  userInfoReducer,
  userAddressReducer
], initialState);

const rootReducer = combineReducers({
  user: userReducer
});

const store = createStore(rootReducer);

store.dispatch({
  type: 'USER_NAME_UPDATE',
  payload: {
    name: 'Test'
  }
});
