import React, { Component } from 'react'

export default class SearchBar extends Component {
  state={term:""};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    render() {
        return (
          <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label style={{ marginLeft:"45%" }}>
                  Video Search
                </label>
                <input
                  type="text"
                  value={this.state.term}
                  placeholder="Search An Video"
                  onChange={(e) => this.setState({ term: e.target.value })}
                ></input>
                <div style={{ display: "grid", marginTop: "10px" }}>
                  <button type="submit" className="ui inverted green button">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
    }
}
