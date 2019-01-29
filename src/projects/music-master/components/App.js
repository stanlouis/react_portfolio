import React, { Component } from "react";
import axios from "axios";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

class App extends Component {
  state = {
    artist: null,
    tracks: []
  };

  componentDidMount() {
    this.searchArtist("pentatonix");
  }

  searchArtist = artistQuery => {
    // Get requested artist
    axios
      .get(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => {
        const { artists } = response.data;
        if (artists.total > 0) {
          const artist = artists.items[0];
          this.setState({ artist });

          // Get artist top tracks
          axios
            .get(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => {
              const { tracks } = response.data;
              this.setState({ tracks });
            })
            .catch(error => alert(error.message));
        }
      })
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <div className="container">
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
