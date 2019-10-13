import {combineReducers} from 'redux';

import people_reducer from './people_reducer';

const rootReducer = combineReducers({   // Combine reducers together into one key-value pair that you can always call by the same key (people)
  people: people_reducer
})

export default rootReducer