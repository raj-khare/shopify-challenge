import { types } from "./actions";
import { act } from "react-dom/test-utils";

const fetchMovies = (
  state = { loading: false, data: [], err: null },
  action
) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case types.FETCH_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_MOVIES_FAILED:
      return {
        ...state,
        err: action.err,
        loading: false,
      };

    default:
      return state;
  }
};

const getMovieDetails = (
  state = { loading: false, data: [], err: null },
  action
) => {
  switch (action.type) {
    case types.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case types.GET_MOVIE_DETAILS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case types.GET_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        err: action.err,
        loading: false,
      };

    default:
      return state;
  }
};

const nominateMovie = (state = { movies: [] }, action) => {
  switch (action.type) {
    case types.NOMINATE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    default:
      return state;
  }
};

export { fetchMovies, getMovieDetails, nominateMovie };
