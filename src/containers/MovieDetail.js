import React from "react";
import { connect } from "react-redux";
import "./MovieDetail.css";
import { nominateMovie } from "../actions";

class MovieDetail extends React.Component {
  render() {
    return (
      <div className="movie-detail">
        <p>{this.props.data.Title}</p>
        <button
          onClick={() =>
            this.props.nominateMovie(
              this.props.data.imdbID,
              this.props.data.Title
            )
          }
        >
          Nominate
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.getMovieDetails.data,
  err: state.getMovieDetails.err,
  loading: state.getMovieDetails.loading,
});

const mapDispatchToProps = (dispatch) => ({
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
