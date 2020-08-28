import React from "react";
import { connect } from "react-redux";

class NominateList extends React.Component {
  render() {
    return (
      <>
        <div>NominateList</div>
        {this.props.movies.map((m) => (
          <p>{m.id}</p>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.nominateMovie.movies,
});

const mapDispatchToProps = (dispatch) => ({
  // fetchMovies: (searchTerm) => dispatch(fetchMovies(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NominateList);
