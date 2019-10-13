import React, { Component } from 'react'

class PeopleList extends Component {

  render() {
    console.log('peoplelist.js', this.props.people)
    return (
      <div style={{color:'white'}}>
        <p>I am from PeopleList</p>
      </div>
    )
  }
}

export default PeopleList
