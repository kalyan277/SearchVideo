import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './videoDetails'


export default class App extends Component {
  state = { dataVideo: [],selectedVideo: null };

  componentDidMount(){
    this.onSearchSubmit("react tutorial");
  }
  onSearchSubmit = async (term) => {
    const respose = await youtube.get(
      "/search",
      {
      params: {q:term},
      }
    );
    this.setState({
      dataVideo: respose.data.items,
      selectedVideo:respose.data.items[0]
    });
  };
  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.dataVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

