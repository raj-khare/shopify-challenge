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
      <div className="flex-1 p-5">
        <h3 className="text-4xl ml-2 font-semibold">Nominations</h3>
        <div className="flex flex-wrap mt-5">{movies}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.nominations.movies,
});

export default connect(mapStateToProps, null)(Nomination);
