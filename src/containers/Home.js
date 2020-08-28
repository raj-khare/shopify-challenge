import React from "react";
import "./Home.css";
import MovieDetail from "./MovieDetail";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import Movie from "../components/Movie";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  render() {
    return (
      <div className="home">
        {this.props.loading ? <p>Loading...</p> : null}
        {this.props.err ? <p>Error</p> : null}
        <div>
          <input
            className="search"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          />
          <button onClick={() => this.props.fetchMovies(this.state.searchTerm)}>
            Search
          </button>
        </div>
        {this.props.data.map((m) => (
          <Movie key={m.imdbID} data={m} />
        ))}
        <MovieDetail />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.fetchMovies.data,
  err: state.fetchMovies.err,
  loading: state.fetchMovies.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (searchTerm) => dispatch(fetchMovies(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
