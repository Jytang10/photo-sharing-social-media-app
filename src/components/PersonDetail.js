import React, { Component } from 'react'
import {personDetail} from '../actions';
import {connect} from 'react-redux';

class PersonDetail extends Component {

  componentDidMount(){
    this.props.personDetail(this.props.match.params.name)
  }

  render() {
    return (
      <div>
        {
          this.props.person && this.props.person.map(p => {
            return (
              <div key={p.id}>
                <div className="detailContainer">
                  <div className="detailProfilePicContainer">
                    <img src={`/Albums/${p.name}/${p.profile_pic}.jpeg`} className="detail" alt="profile picture"/>
                  </div>
                </div>
              </div>
            )
          })
        }
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
