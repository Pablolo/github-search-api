import React, { Component } from 'react';

class Results extends Component {
  render() {
    const { users } = this.props;
    console.log('useeers', users);
    return (
      <div>
        <ul>
          {users.map((item, index) => <a key={index} href={item.html_url}><li className='list-items'>{item.login}</li></a>)}
        </ul>
      </div>
    );
  }
}

export default Results;