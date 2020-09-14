import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from './unsplash';
import ImageList from './imageList';


export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const respose = await unsplash.get(
      "/search/photos",
      {
        params: { query: term },
      }
    );
    this.setState({
      images: respose.data.results,
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar  onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

