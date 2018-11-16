import React, { Component } from "react";

class App extends Component {
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
        </section>
        <section className="cats">
          <h2>Cats</h2>
          <h4>Name: </h4>
          <h4>Gender: </h4>
          <h4>Age: </h4>
          <h4>Breed: </h4>
          <h4>Their Story: </h4>
        </section>
      </div>
    );
  }
}

export default App;