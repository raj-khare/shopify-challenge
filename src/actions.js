import { toast } from "react-toastify";
import axios from "axios";
import store from "./store";
import types from "./types";
// Actions
const fetchMovies = (searchTerm) => async (dispatch) => {
  dispatch({ type: types.FETCH_MOVIES_PENDING });
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&type=movie&r=json&apikey=e1592641`
    );
    if (response.data.Error) throw new Error(response.data.Error);
    console.log(response);
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
    console.log(response);
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

const nominateMovie = (id) => (dispatch) => {
  if (store.getState().nominations.movies.length === 5)
    toast.warn("You have nominated 05 movies", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  else {
    dispatch({
      type: types.NOMINATE_MOVIE,
      payload: id,
    });
  }
};

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
