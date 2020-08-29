import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";

class Nomination extends React.Component {
  render() {
    const nominations = [];
    let i = 0;
    for (; i < this.props.nominations.length; i++) {
      nominations.push(<Movie data={this.props.nominations[i]} />);
    }
    for (; i < 5; i++) {
      nominations.push(<Movie placeholder={true} num={i + 1} />);
    }

    return (
      <div className="flex-1 p-5">
        <h3 className="text-4xl ml-2 font-semibold">Nominations</h3>
        <div className="flex flex-wrap mt-5">{nominations}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nominations: state.nominateMovie.nominations,
});

export default connect(mapStateToProps, null)(Nomination);
