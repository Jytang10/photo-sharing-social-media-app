import React, { Component } from 'react'

class PersonDetail extends Component {

  render() {
    return (
      <div style={{color:'white'}}>
        <h1>Hi I am PersonDetail</h1>
        {this.props.match.params.name}
      </div>
    )
  }
}

export default PersonDetail
