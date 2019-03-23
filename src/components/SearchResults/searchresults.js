import React from 'react';
import './searchresults.css';
import TrackList from './../TrackList/tracklist';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} onRemove={this.props.onRemove}
        isRemoval={false} />
      </div>
    );
  }
}

export default SearchResults;