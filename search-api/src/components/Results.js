import React, { Component } from 'react';

class Results extends Component {
  render() {
    const { users } = this.props;
    console.log('useeers', users);
    return (
      <div>
        <ul>
          {users.map((item, index) => <li className='list-items' key={index}>{item.login}</li>)}
        </ul>
      </div>
    );
  }
}

export default Results;