import React from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../actions";

class Movie extends React.Component {
  render() {
    if (this.props.placeholder)
      return (
        <div
          className="w-40 h-48 border-solid border-2 m-2 flex items-center justify-center"
          style={{ borderColor: "#262630" }}
        >
          <p className="text-4xl" style={{ color: "#262630" }}>
            {this.props.num}
          </p>
        </div>
      );
    return (
      <div className="m-2">
        <img
          src={this.props.data.cover}
          className="object-cover w-40 h-48"
        ></img>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getMovieDetails: (id) => dispatch(getMovieDetails(id)),
});

export default connect(null, mapDispatchToProps)(Movie);
