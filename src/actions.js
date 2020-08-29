const axios = require("axios");

// Types of action
const types = {
  FETCH_MOVIES_FAILED: "LOADING_MOVIES_FAILED",
  FETCH_MOVIES_SUCCESS: "LOADING_MOVIES_SUCCESS",
  FETCH_MOVIES_PENDING: "FETCH_MOVIES_PENDING",
  GET_MOVIE_DETAILS_PENDING: "GET_MOVIE_DETAILS_PENDING",
  GET_MOVIE_DETAILS_SUCCESS: "GET_MOVIE_DETAILS_SUCCESS",
  GET_MOVIE_DETAILS_FAILED: "GET_MOVIE_DETAILS_FAILED",
  NOMINATE_MOVIE: "NOMINATE_MOVIE",
  REMOVE_NOMINATED_MOVIE: "REMOVE_NOMINATED_MOVIE",
};

// Actions
const fetchMovies = (searchTerm) => async (dispatch) => {
  dispatch({ type: types.FETCH_MOVIES_PENDING });
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&type=movie&r=json&apikey=e1592641`
    );
    if (response.data.Error) throw new Error(response.data.Error);
    dispatch({
      type: types.FETCH_MOVIES_SUCCESS,
      payload: response.data.Search,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_MOVIES_FAILED,
      err: error,
    });
  }
};

const getMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: types.GET_MOVIE_DETAILS_PENDING });
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&type=movie&r=json&plot=short&apikey=e1592641`
    );
    dispatch({
      type: types.GET_MOVIE_DETAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_MOVIES_FAILED,
      err: error,
    });
  }
};

const nominateMovie = (id) => ({
  type: types.NOMINATE_MOVIE,
  payload: id,
});

const removeNominatedMovie = (id) => ({
  type: types.REMOVE_NOMINATED_MOVIE,
  payload: id,
});

export {
  fetchMovies,
  nominateMovie,
  getMovieDetails,
  removeNominatedMovie,
  types,
};
