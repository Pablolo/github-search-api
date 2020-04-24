import React, { Component } from 'react';
import Results from './components/Results';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import './App.css';

const STATUS = {
    LOADING: "LOADING",
    LOADED: "LOADED",
    ERROR: "ERROR",
  };

class App extends Component {

  state = {
    status: STATUS.LOADED,
    query: '',
    users: [],
  }

  // componentDidMount() {
  //   axios.get(`https://api.github.com/search/users`)
  //     .then(response => {
  //       console.log("response", response.data);
  //       this.setState({
  //         // users: response.data.items,
  //         status: STATUS.LOADED,
  //       })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  clickSearch = () => {
    axios.get(`https://api.github.com/search/users?q=${this.state.query}`)
    .then(response => {
      console.log("response", response.data);
      this.setState({
        users: response.data.items,
        status: STATUS.LOADED,
      })
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  search = (e) => {
    this.setState({
      query: e.target.value,
    })
  }

  render() {
    const { users, status } = this.state;
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return <div className="App">
        <h1>GitHub Search</h1>
        <SearchBar searchQuery={this.search} />
        <button onClick={this.clickSearch} className="search-btn">Search</button>
        <Results users={users} />
        </div>
      case STATUS.ERROR:
        return <div>Error</div>
    }
  }
}

export default App;

