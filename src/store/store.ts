import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "../reducers/counterReducer";
import { userReducer } from "../reducers/userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      console.log("dispatching", action);
      console.log("next", next);
      let result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};

function thunkMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    console.log("thunk");
    return typeof action === "function"
      ? action(dispatch, getState)
      : next(action);
  };
}

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
