import React from "react";
import { connect } from "react-redux";
import { getMovieDetails, nominateMovie } from "../actions";

class MovieDetail extends React.Component {
  componentDidMount() {
    this.props.getMovieDetails(this.props.id);
  }
  render() {
    if (this.props.movieDetails.loading) return <p>Loading...</p>;
    if (this.props.movieDetails.err) return <p>Error</p>;
    return (
      <div className="" style={{ flex: 2 }}>
        <p>{this.props.movieDetails.data.Title}</p>
        <button
          onClick={() =>
            this.props.nominateMovie(this.props.movieDetails.data.imdbID)
          }
        >
          Nominate
        </button>
        <button onClick={this.props.goBack}>back</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
