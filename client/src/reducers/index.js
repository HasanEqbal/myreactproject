import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import meetingReducers from './meetingReducer';

export default combineReducers({
  form: formReducer,
  meetingDetails: meetingReducers,
});
