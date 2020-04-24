import React, { Component } from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import './App.css';

const STATUS = {
    WAITING: "WAITING",
    LOADING: "LOADING",
    LOADED: "LOADED",
    ERROR: "ERROR",
  };

class App extends Component {

  state = {
    status: STATUS.WAITING,
    query: '',
    users: [],
    error: '',
  }

  clickSearch = () => {
    this.setState({status: STATUS.LOADING})
    axios.get(`https://api.github.com/search/users?q=${this.state.query}`)
    .then(response => {
      console.log("response", response.data);
      this.setState({
        users: response.data.items,
        status: STATUS.LOADED,
      })
    })
    .catch((error) => {
      this.setState({
        error: error.name,
        status: STATUS.ERROR,
      });
    })
  }

  search = (e) => {
    this.setState({
      query: e.target.value,
    })
  }

  render() {
    const { users, status } = this.state;
    return (
      <div className="App">
        <h1 className="title">GitHub Search</h1>
        <SearchBar searchQuery={this.search} />
        <button onClick={this.clickSearch} className="search-btn">Search</button>
        {status === STATUS.WAITING && <div className="waiting-phrase">Write something and click on the search button...</div>}
        {status === STATUS.LOADING && <div className="waiting-phrase">Loading...</div>}
        {status === STATUS.LOADED && <Results users={users} />}
        {status === STATUS.ERROR && <div className="waiting-phrase">{this.state.error}, search something.</div>}
      </div>
    );
  }
}

export default App;

