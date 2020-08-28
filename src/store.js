import { createStore, applyMiddleware, combineReducers } from "redux";
import { fetchMovies, getMovieDetails, nominateMovie } from "./reducer";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({ fetchMovies, getMovieDetails, nominateMovie }),
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}
