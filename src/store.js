import { createStore, applyMiddleware, combineReducers } from "redux";
import { fetchMovies, movieDetails, nominations } from "./reducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ fetchMovies, movieDetails, nominations }),
  {},
  applyMiddleware(thunk)
);

export default store;
