import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/stanProfile.jpg";
import Title from "./Title";

class App extends Component {
  state = {
    displayBio: false
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <Title />
        <p>
          My favorite language is JavaScript and my favorite front-end framework
          is React.
        </p>
        <p>I'm always looking forward to working on meaningful projects.</p>

        {this.state.displayBio ? (
          <div>
            <p>I live in Maryland, and code every day.</p>
            <p>Besides coding, I also love hiking and diving</p>
            <button
              className="btn btn-outline-dark"
              onClick={this.toggleDisplayBio}
            >
              Show less
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-outline-dark"
              onClick={this.toggleDisplayBio}
            >
              Read more
            </button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
