import React, { Component } from 'react'

class PeopleList extends Component {

  renderPeople = () => {
    if(this.props.people !== undefined){
      return this.props.people.map(person => {
        return (
          <div key={person.id}>
            <img src={`Albums/${person.name}/${person.profile_pic}.jpeg`} alt="profile pic"/>
            <div>
              <h1>{person.name}</h1>
            </div>
          </div>
        )
      })
    }
  }

  render() {
    console.log('peoplelist.js', this.props.people)
    return (
      <div style={{color:'white'}}>
        {this.renderPeople()}
      </div>
    )
  }
}

export default PeopleList
