import React, { Component } from 'react';

class SearchBar extends Component {

  search = (e) => {
    this.props.searchQuery(e);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.search}/><br/>
      </div>
    );
  }
}

export default SearchBar;