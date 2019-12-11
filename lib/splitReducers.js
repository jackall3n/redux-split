"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitReducers(reducers) {
    return function splitReducer(state, action) {
        return reducers.reduce(function (reducerState, reducer) { return reducer(reducerState, action); }, state);
    };
}
exports.default = splitReducers;
