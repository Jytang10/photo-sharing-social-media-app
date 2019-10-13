import React, { Component } from 'react'
import {personDetail} from '../actions';
import {connect} from 'react-redux';

class PersonDetail extends Component {

  componentDidMount(){
    this.props.personDetail(this.props.match.params.name)
  }

  render() {
    return (
      <div style={{color:'white'}}>
        <h1>Hi I am PersonDetail</h1>
        {this.props.match.params.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps,{personDetail})(PersonDetail);
