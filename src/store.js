import { createStore, applyMiddleware, combineReducers } from "redux";
import { fetchMovies, movieDetails, nominations } from "./reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({ fetchMovies, movieDetails, nominations }),
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}
