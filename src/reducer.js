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

const nominateMovie = (
  state = {
    nominations: [
      {
        title: "Cars",
        cover:
          "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case types.NOMINATE_MOVIE:
      return {
        ...state,
        nominations: [...state.movies, action.payload],
      };

    default:
      return state;
  }
};

export { fetchMovies, getMovieDetails, nominateMovie };
