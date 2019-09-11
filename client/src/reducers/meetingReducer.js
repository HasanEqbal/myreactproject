import _ from 'lodash';
import {
  CREATE_MEETING,
  FETCH_MEETINGS,
  FETCH_MEETING,
  DELETE_MEETING,
  EDIT_MEETING,
  ADD_MEETING_POINTS,
} from '../actions/type';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEETINGS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_MEETING: {
      return { ...state, [action.payload.id]: action.payload };
    }
    case CREATE_MEETING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_MEETING:
      return { ...state, [action.payload.id]: action.payload };
    case ADD_MEETING_POINTS:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_MEETING:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
