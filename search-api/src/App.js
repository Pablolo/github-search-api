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
    status: STATUS.LOADING,
    query: '',
    users: [],
  }

  componentDidMount() {
    axios.get(`https://api.github.com/search/users?q=tom`)
      .then(response => {
        // console.log(response.data.items);
        this.setState({
          users: response.data.items,
          status: STATUS.LOADED,
        })
      })
      .catch(function (error) {
        console.log(error);
        // this.setState({
        //   status: STATUS.ERROR,
        // })
      })
  }

  search = (e) => {
    this.setState({
      query: e.target.value,
    })
  }

  render() {
    const { users, query, status } = this.state;
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return <div className="App">
        <h1>GitHub Search</h1>
        <SearchBar searchQuery={this.search} />
        <Results users={users} query={query}/>
        </div>
      case STATUS.ERROR:
        return <div>Error</div>
    }
  }
}

export default App;

