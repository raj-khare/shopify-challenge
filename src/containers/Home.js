import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import MovieDetail from "./MovieDetail";
import plusSVG from "./plus.svg";
import { nominateMovie } from "../actions";
import searchSVG from "./search.svg";
import errorSVG from "./error.svg";
import ClipLoader from "react-spinners/ClipLoader";

function MovieText({ data, showDetails, nominateMovie }) {
  return (
    <div
      className="mb-1 flex justify-between items-center rounded py-3 px-5 border-2"
      style={{ borderColor: "#262630" }}
    >
      <div>
        <h2 className="text-xl cursor-pointer" onClick={showDetails}>
          {data.Title}
          <span className="text-xs ml-2" style={{ color: "#b5bbc9" }}>
            ({data.Year})
          </span>
        </h2>
      </div>
      <img
        src={plusSVG}
        className="h-4 cursor-pointer"
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

  showContent = () => {
    if (this.props.movies.loading)
      return (
        <div className="flex justify-center mt-10">
          <ClipLoader
            size={30}
            color={"#fff"}
            loading={this.props.movies.loading}
          />
        </div>
      );

    if (this.props.movies.err)
      return (
        <div className="flex flex-col justify-center mt-10">
          <img src={errorSVG} className="h-10" />
          <p className="text-center mt-3">Error!</p>
        </div>
      );

    return (
      <div className="mt-5 mx-auto">
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
    );
  };

  render() {
    if (this.state.showDetails)
      return (
        <MovieDetail
          id={this.state.id}
          goBack={() => this.setState({ showDetails: false, id: null })}
        />
      );

    return (
      <div style={{ flex: 2 }}>
        <div className="w-1/2 mt-20 mx-auto">
          <div
            className="w-full rounded py-3 px-5 flex items-center"
            style={{ backgroundColor: "#262630" }}
          >
            <img src={searchSVG} className="h-6" />
            <input
              autoFocus={true}
              className="placeholder border-none bg-transparent ml-5 flex-1 text-2xl text-white outline-none focus:outline-none focus:border-none"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
              placeholder="Search Movies"
              onKeyDown={(e) => {
                if (e.keyCode === 13)
                  this.props.fetchMovies(this.state.searchTerm);
              }}
            />
          </div>
          {this.showContent()}
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
