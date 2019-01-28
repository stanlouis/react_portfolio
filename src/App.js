import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/stanProfile.jpg";

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
        <p>My name is Stanley. I'm a software engineer.</p>
        <p>
          My favorite language is JavaScript and my favorite front-end framework
          is React.
        </p>
        <p>I'm always looking forward to working on meaningful projects.</p>

        {this.state.displayBio ? (
          <div>
            <p>I live in Maryland, and code every day.</p>
            <p>Besides coding, I also love hiking and diving</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
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
