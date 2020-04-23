import React, { Component } from 'react';

class Results extends Component {

  renderResults = () => {
    const { users, query } = this.props;
    console.log(users)
    return users.map(item => {
      if (item.login.toLowerCase().includes(query.toLowerCase())) {
        return <li>{item.login}</li>;
      } else {
        return item;
      }
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderResults()}
        </ul>
      </div>
    );
  }
}

export default Results;