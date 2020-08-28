import React from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../actions";
class Movie extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.getMovieDetails(this.props.data.imdbID)}>
        <img src={this.props.data.Poster}></img>
        <div>{this.props.data.Title}</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: (id) => dispatch(getMovieDetails(id)),
});

export default connect(null, mapDispatchToProps)(Movie);
