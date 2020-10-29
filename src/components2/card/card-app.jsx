import React, { Component } from 'react';

import { CardList } from '../card-list/card-list.component';




class CardApp extends Component {
  constructor() {
    super();

    this.state = {
      moyns: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ moyns: users }));
  }

 

  render() {
    const { moyns, searchField } = this.state;
    const filteredMoyns = moyns.filter(moy =>
      moy.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Users</h1>
        <CardList moyns={filteredMoyns} />
      </div>
    );
  }
}

export default CardApp;