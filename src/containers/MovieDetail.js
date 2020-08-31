import React from "react";
import { connect } from "react-redux";
import { getMovieDetails, nominateMovie } from "../actions";
import backSVG from "./back.svg";
import errorSVG from "./error.svg";
import ClipLoader from "react-spinners/ClipLoader";

class MovieDetail extends React.Component {
  componentDidMount() {
    this.props.getMovieDetails(this.props.id);
  }

  showContent = () => {
    if (this.props.movieDetails.loading)
      return (
        <div className="flex justify-center mt-32">
          <ClipLoader
            size={30}
            color={"#fff"}
            loading={this.props.movieDetails.loading}
          />
        </div>
      );

    if (this.props.movieDetails.err)
      return (
        <div className="flex flex-col justify-center mt-32">
          <img src={errorSVG} className="h-10" alt="Error" />
          <p className="text-center mt-3">Error!</p>
        </div>
      );

    return (
      <div className="mx-auto w-3/4">
        <img
          src={backSVG}
          alt="Go back"
          className="h-5 cursor-pointer my-5"
          onClick={this.props.goBack}
        />

        <img
          src={`https://img.omdbapi.com/?apikey=e1592641&i=${this.props.id}`}
          alt="movie poster"
          className="img object-cover w-56 h-64 rounded"
        ></img>

        <h3 className="font-bold text-3xl py-5 text-white">
          {this.props.movieDetails.data.Title}
        </h3>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Plot
              </td>
              <td className="pb-3">{this.props.movieDetails.data.Plot}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Actors
              </td>
              <td className="pb-3">{this.props.movieDetails.data.Actors}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Awards
              </td>
              <td className="pb-3">{this.props.movieDetails.data.Awards}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Director
              </td>
              <td className="pb-3">{this.props.movieDetails.data.Director}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Genre
              </td>
              <td className="pb-3">{this.props.movieDetails.data.Genre}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Released
              </td>
              <td className="pb-3">{this.props.movieDetails.data.Released}</td>
            </tr>
            <tr>
              <td className="block uppercase tracking-wide  text-xs font-bold w-1/4 mr-4">
                Rating
              </td>
              <td className="pb-3">
                {this.props.movieDetails.data.imdbRating}
              </td>
            </tr>
          </tbody>
        </table>
        {this.props.nominations.includes(this.props.id) ? (
          <button
            className="text-white mt-5 font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none opacity-50 cursor-not-allowed"
            style={{ backgroundColor: "#262630" }}
          >
            Already nominated
          </button>
        ) : (
          <button
            className="text-white mt-5 font-bold py-2 px-4 border-none rounded outline-none focus:outline-none focus:border-none"
            style={{ backgroundColor: "#0687ff" }}
            onClick={() => {
              this.props.nominateMovie(this.props.movieDetails.data.imdbID);
            }}
          >
            Nominate
          </button>
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="mt-5" style={{ flex: 2 }}>
        {this.showContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetails: state.movieDetails,
  nominations: state.nominations.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieDetails: (id) => dispatch(getMovieDetails(id)),
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
