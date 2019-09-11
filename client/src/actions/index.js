import meeting from '../apis/meeting';
import createHistory from '../history';
import {
  CREATE_MEETING,
  FETCH_MEETINGS,
  FETCH_MEETING,
  DELETE_MEETING,
  EDIT_MEETING,
  ADD_MEETING_POINTS,
} from './type';

export const createMeeting = (formValues) => async (dispatch) => {
  const response = await meeting.post('/meeting', formValues);
  dispatch({ type: CREATE_MEETING, payload: response.data });
  createHistory.push('/');
};

export const fetchMeetings = () => async (dispatch) => {
  const response = await meeting.get('/meeting');
  dispatch({ type: FETCH_MEETINGS, payload: response.data });
};

export const fetchMeeting = (id) => async (dispatch) => {
  const response = await meeting.get(`/meeting/${id}`);
  dispatch({ type: FETCH_MEETING, payload: response.data });
};

export const editMeeting = (id, formValues) => async (dispatch) => {
  const response = await meeting.patch(`/meeting/${id}`, formValues);
  dispatch({ type: EDIT_MEETING, payload: response.data });
  createHistory.push('/');
};

export const addingMeetingPoints = (id, formValues) => async (dispatch) => {
  const response = await meeting.patch(`/meeting/${id}`, formValues);
  dispatch({ type: ADD_MEETING_POINTS, payload: response.data });
  createHistory.push('/');
};

export const deleteMeeting = (id) => async (dispatch) => {
  await meeting.delete(`/meeting/${id}`);
  dispatch({ type: DELETE_MEETING, payload: id });
  createHistory.push('/');
};
