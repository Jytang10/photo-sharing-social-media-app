import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../actions';
import PeopleList from './PeopleList';

class App extends Component {

  componentDidMount(){
    this.props.getPeople();
  }

  render() {
    return (
      <div>
        <PeopleList people={this.props.allPeople}></PeopleList>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    allPeople: state.people.getPeople
  }
}

export default connect(mapStateToProps,{getPeople})(App)
