import React, { Component } from 'react';
import PeopleList from './PeopleList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <PeopleList></PeopleList>
      </div>
    )
  }
}

export default App
