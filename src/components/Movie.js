import React from "react";
import { connect } from "react-redux";
import { removeNominatedMovie } from "../actions";

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
          src={`http://img.omdbapi.com/?apikey=e1592641&i=${this.props.id}`}
          className="object-cover w-40 h-48"
        ></img>
        <button onClick={() => this.props.removeNominatedMovie(this.props.id)}>
          Remove
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeNominatedMovie: (id) => dispatch(removeNominatedMovie(id)),
});

export default connect(null, mapDispatchToProps)(Movie);
