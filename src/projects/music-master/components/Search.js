import React, { Component } from "react";

class Search extends Component {
  state = {
    artistQuery: ""
  };

  updateArtistQuery = e => {
    const { value } = e.target;
    this.setState({ artistQuery: value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") this.searchArtist();
  };

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          value={this.state.artistQuery}
          name="artistQuery"
          type="text"
          className="form-control"
          placeholder="Search for an Artist"
        />
        <div className="input-group-append">
          <button
            onClick={this.searchArtist}
            className="bnt-outline-secondary"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
