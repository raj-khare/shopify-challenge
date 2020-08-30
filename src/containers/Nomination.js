import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";

class Nomination extends React.Component {
  render() {
    const movies = [];
    let i = 0;
    for (; i < this.props.movies.length; i++) {
      movies.push(<Movie id={this.props.movies[i]} />);
    }
    for (; i < 5; i++) {
      movies.push(<Movie placeholder={true} num={i + 1} />);
    }

    return (
      <div className="flex-1 flex flex-col p-5">
        <button
          style={{ backgroundColor: "#f65d57" }}
          className="text-black font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none self-end"
        >
          Share
        </button>
        <h1 className="uppercase tracking-wide block font-semibold">
          N o m i n a t i o n s
        </h1>
        <div className="flex flex-wrap mt-5">{movies}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.nominations.movies,
});

export default connect(mapStateToProps, null)(Nomination);
