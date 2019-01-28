import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => {
  return (
    <div className="col-md-4 mx-auto text-center my-1">
      <div className="card card-block">
        <div className="card-body">
          <h4 className="card-title">{setup}</h4>
          <div className="card-text">{punchline}</div>
        </div>
      </div>
    </div>
  );
};

class Jokes extends Component {
  state = {
    joke: {},
    jokes: []
  };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(json => this.setState({ joke: json }));
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }));
  };

  render() {
    const { joke, tell } = this.state;
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={joke} tell={tell} />

        <h3 className="mt-3">Want ten new jokes?</h3>
        <button onClick={this.fetchJokes} className="btn-primary">
          Click me!
        </button>
        <div className="row">
          {this.state.jokes.map(joke => {
            const { id } = joke;
            return <Joke key={id} joke={joke} />;
          })}
        </div>
      </div>
    );
  }
}

export default Jokes;
