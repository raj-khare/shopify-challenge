import React from "react";
import { connect } from "react-redux";
import { fetchMovies, showMovieDetails } from "../actions";
import MovieDetail from "./MovieDetail";

function MovieText({ data, onClick }) {
  return (
    <div
      className="mt-2 flex items-center rounded py-3 px-5"
      style={{ backgroundColor: "#262630" }}
      onClick={onClick}
    >
      <div className="">
        <h2 className="text-2xl">
          {data.Title}
          <span className="text-xs ml-2">{data.Year}</span>
        </h2>
      </div>
    </div>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", showDetails: false, id: null };
  }

  render() {
    if (this.state.showDetails)
      return (
        <MovieDetail
          id={this.state.id}
          goBack={() => this.setState({ showDetails: false, id: null })}
        />
      );

    if (this.props.movies.loading) return <p>Loading...</p>;
    if (this.props.movies.err) return <p>Error</p>;

    return (
      <div className="" style={{ flex: 2 }}>
        <div className="flex w-1/2 mt-20 ml-10">
          <input
            className="flex-1 rounded bg-transparent appearance-none py-4 px-6 border-2 outline-none focus:outline-none focus:border-none"
            style={{ borderColor: "#262630" }}
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            onKeyDown={(e) => {
              if (e.keyCode === 13)
                this.props.fetchMovies(this.state.searchTerm);
            }}
          />
        </div>
        <div className="ml-10 mt-5 w-1/2">
          {this.props.movies.data.map((movie) => (
            <MovieText
              key={movie.imdbID}
              data={movie}
              onClick={() =>
                this.setState({ showDetails: true, id: movie.imdbID })
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.fetchMovies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (searchTerm) => dispatch(fetchMovies(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
