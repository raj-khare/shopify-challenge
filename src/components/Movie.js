import React from "react";
import { connect } from "react-redux";
import { removeNominatedMovie } from "../actions";
import crossSVG from "./cross.svg";

class Movie extends React.Component {
  render() {
    if (this.props.placeholder)
      return (
        <div
          className="w-40 h-48 border-dashed border-2 m-2 flex items-center justify-center rounded"
          style={{ borderColor: "#262630" }}
        >
          <p className="text-2xl" style={{ color: "#262630" }}>
            {this.props.num}
          </p>
        </div>
      );
    return (
      <div className="m-2" style={{ position: "relative" }}>
        <img
          src={`https://img.omdbapi.com/?apikey=e1592641&i=${this.props.id}`}
          className="object-cover w-40 h-48 rounded"
          alt="movie poster"
        ></img>
        <img
          src={crossSVG}
          className="h-5 cursor-pointer"
          alt="close button"
          onClick={() => this.props.removeNominatedMovie(this.props.id)}
          style={{ position: "absolute", top: -7, right: -7 }}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeNominatedMovie: (id) => dispatch(removeNominatedMovie(id)),
});

export default connect(null, mapDispatchToProps)(Movie);
