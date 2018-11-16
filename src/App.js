import React, { Component } from "react";
import { connect } from "react-redux";
import { getCatsAction, deleteCatsAction } from "./actions/cats";
import { getDogsAction, deleteDogsAction } from "./actions/dogs";

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
          <img className="dogPic" src={this.props.dogReducer.dogs.imageURL}/>
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
          <img className="catPic" src={this.props.catReducer.cats.imageURL}/>
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
