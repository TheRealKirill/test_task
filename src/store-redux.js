import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { feedReducer } from "./lib/feed";

const reducers = combineReducers({
  feed: feedReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
