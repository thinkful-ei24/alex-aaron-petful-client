import React, { Component } from "react";
import { connect } from "react-redux";
import { getCatsAction } from "./actions/cats";
import { getDogsAction } from "./actions/dogs";

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(getCatsAction());
    this.props.dispatch(getDogsAction());
  }

  render() {
    return (
      <div className="petGrid">
        <h1>Petful</h1>
        <section className="dogs">
          <h2>Dogs</h2>
          <img className="dogPic" />
          <h4>Name: </h4>
          <h4>Gender: </h4>
          <h4>Age: </h4>
          <h4>Breed: </h4>
          <h4>Their Story: </h4>
          <button
            onClick={() => {
              console.log("dog adopt");
            }}
          >
            Adopt
          </button>
        </section>
        <section className="cats">
          <h2>Cats</h2>
          <img className="catPic" />
          <h4>Name: </h4>
          <h4>Gender: </h4>
          <h4>Age: </h4>
          <h4>Breed: </h4>
          <h4>Their Story: </h4>
          <button
            onClick={() => {
              console.log("cat adopt");
            }}
          >
            Adopt
          </button>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
