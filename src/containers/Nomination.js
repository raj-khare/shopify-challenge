import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import {
  getIDSfromQuery,
  setQueryStringWithoutPageReload,
} from "../queryStrings";
import { nominateMovie } from "../actions";

class Nomination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  componentDidMount() {
    const values = getIDSfromQuery("movies");
    setQueryStringWithoutPageReload("?");
    values.map((id) => this.props.nominateMovie(id));
  }

  copyURLtoClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

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
          onClick={this.copyURLtoClipboard}
        >
          {this.state.copied ? "Copied!" : "Share"}
        </button>
        <h1 className="block text-2xl font-semibold">Nominations</h1>
        <div className="flex flex-wrap mt-5">{movies}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.nominations.movies,
});

const mapDispatchToProps = (dispatch) => ({
  nominateMovie: (id) => dispatch(nominateMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nomination);
