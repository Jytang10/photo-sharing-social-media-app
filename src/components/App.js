import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../actions';
import PeopleList from './PeopleList';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  componentDidMount(){
    this.props.getPeople();
  }

  render() {
    return (
      <div>
        <PeopleList></PeopleList>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('-------',state)
  return {
    allPeople: state.people.getPeople
  }
}

export default connect(mapStateToProps,{getPeople})(App)
