import React, { Component } from "react";
import { connect } from "react-redux";
import { getCatsAction, deleteCatsAction } from "./actions/cats";
import { getDogsAction, deleteDogsAction } from "./actions/dogs";
import { onboard } from "./actions/onboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCatsAction());
    this.props.dispatch(getDogsAction());
  }

  render() {

    if (this.props.onboardReducer.onboard === true) {
      return (
        <React.Fragment>
          <h1>Petful</h1>
          <p>Looking for a dog or a cat to adopt? Look no further, you have found the spot! Here at Petful we pair you with the perfect dog or cat. We also have a policy in place to make sure that no dog or cat stays here longer than they have to. Whenever you're ready, click the button below and we can get started and look at the dog and cat available to you!</p>
          <button
            onClick={() => {
              this.props.dispatch(onboard());
            }}
          >
            Let's Go!
          </button>
        </React.Fragment>
      );
    }
    if (this.props.onboardReducer.onboard === false) {
      if (
        !this.props.dogReducer.dogs.imageURL ||
        !this.props.catReducer.cats.imageURL
      ) {
        return (
          <React.Fragment>
            <h1>Loading...</h1>
            <h3>If this persists for more than 10 seconds, please refresh.</h3>
          </React.Fragment>
        );
      } else {
        return (
          <div className="petGrid">
            <h1>Petful</h1>
            <section className="dogs">
              <h2>Dogs</h2>
              <div className="imgBoxDog">
                <img
                  className="dogPic"
                  src={this.props.dogReducer.dogs.imageURL}
                />
              </div>
              <h4>Name: {this.props.dogReducer.dogs.name}</h4>
              <h4>Gender: {this.props.dogReducer.dogs.sex}</h4>
              <h4>Age: {this.props.dogReducer.dogs.age}</h4>
              <h4>Breed: {this.props.dogReducer.dogs.breed}</h4>
              <h4>Their Story: {this.props.dogReducer.dogs.story}</h4>
              <button
                onClick={() => {
                  console.log("dog adopt");
                  this.props.dispatch(deleteDogsAction());
                }}
              >
                Adopt
              </button>
            </section>
            <section className="cats">
              <h2>Cats</h2>
              <div className="imgBoxCat">
                <img
                  className="catPic"
                  src={this.props.catReducer.cats.imageURL}
                />
              </div>
              <h4>Name: {this.props.catReducer.cats.name}</h4>
              <h4>Gender: {this.props.catReducer.cats.sex}</h4>
              <h4>Age: {this.props.catReducer.cats.age}</h4>
              <h4>Breed: {this.props.catReducer.cats.breed}</h4>
              <h4>Their Story: {this.props.catReducer.cats.story}</h4>
              <button
                onClick={() => {
                  console.log("cat adopt");
                  this.props.dispatch(deleteCatsAction());
                }}
              >
                Adopt
              </button>
            </section>
          </div>
        );
      }
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
