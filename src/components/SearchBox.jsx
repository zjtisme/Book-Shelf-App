import React, { Component } from 'react';

class SearchBox extends Component {

  handleSearch = () => {
    const searchText = this.refs.searchText.value.toLowerCase();
  
    this.props.handleSearch(searchText);
  }

  render() {
    return (
      <div>
        <input type="search" ref="searchText" onChange={this.handleSearch} placeholder="search book by title..."/>
      </div>
    );
  }
}

export default SearchBox;
