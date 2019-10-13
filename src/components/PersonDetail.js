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

// State comes from store. people is the rootReducer that combined all the reducers together. personDetail is what was returned in the PERSON_DETAIL switch case in the people_reducer.js 
const mapStateToProps = (state) => {        
  return {  
    person : state.people.personDetail    
  }
}

export default connect(mapStateToProps,{personDetail})(PersonDetail);
