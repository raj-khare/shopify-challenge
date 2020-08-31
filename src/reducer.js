import types from "./types";

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
        err: null,
      };

    case types.FETCH_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
        err: null,
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

const movieDetails = (
  state = { loading: false, data: {}, err: null },
  action
) => {
  switch (action.type) {
    case types.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        err: null,
      };

    case types.GET_MOVIE_DETAILS_PENDING:
      return {
        ...state,
        loading: true,
        err: null,
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

const nominations = (
  state = {
    movies: [],
  },
  action
) => {
  switch (action.type) {
    case types.NOMINATE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case types.REMOVE_NOMINATED_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};

export { fetchMovies, movieDetails, nominations };
