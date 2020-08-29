import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import MovieDetail from "./MovieDetail";
import AddLogo from "./add.svg";
import { nominateMovie } from "../actions";

function MovieText({ data, showDetails, nominateMovie }) {
  return (
    <div
      className="mb-1 flex justify-between items-center rounded py-3 px-5 border-2"
      style={{ borderColor: "#262630" }}
    >
      <div>
        <h2 className="text-xl cursor-pointer" onClick={showDetails}>
          {data.Title}
          <span className="text-xs ml-2">{data.Year}</span>
        </h2>
      </div>
      <img
        src={AddLogo}
        className="h-5 cursor-pointer"
        onClick={() => nominateMovie(data.imdbID)}
      />
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
      <div style={{ flex: 2 }}>
        <div className="w-1/2 mt-20 mx-auto">
          <input
            className=" w-full rounded py-3 px-5 border-none text-2xl font-bold outline-none focus:outline-none focus:border-none"
            style={{ backgroundColor: "#262630" }}
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
            placeholder="Inception"
            onKeyDown={(e) => {
              if (e.keyCode === 13)
                this.props.fetchMovies(this.state.searchTerm);
            }}
          />
        </div>
        <div className="mt-5 w-1/2 mx-auto">
          {this.props.movies.data.map((movie) => (
            <MovieText
              key={movie.imdbID}
              data={movie}
              showDetails={() =>
                this.setState({ showDetails: true, id: movie.imdbID })
              }
              nominateMovie={(id) => this.props.nominateMovie(id)}
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
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
