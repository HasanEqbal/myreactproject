/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
/* eslint-disable brace-style */
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

export const createMeeting = (payload) => {
  return {
    type: CREATE_MEETING,
    payload,
  }; 
};

export const fetchMeetings = (payload) => {
  return {
    type: FETCH_MEETINGS,
    payload,
  }; 
};

export const fetchMeeting = (payload) => {
  return {
    type: FETCH_MEETING,
    payload,
  }; 
};

export const editMeeting = (payload) => {
  return {
    type: EDIT_MEETING,
    payload,
  }; 
};

export const addingMeetingPoints = (payload) => {
  return {
    type: ADD_MEETING_POINTS,
    payload,
  }; 
};

export const deleteMeeting = (id) => {
  return {
    type: DELETE_MEETING,
    payload: id,
  }; 
};

export const boundCreateMeeting = (formValues) => async (dispatch) => {
  const response = await meeting.post('/meeting', formValues);
  dispatch(createMeeting(response.data));
  createHistory.push('/'); };

export const boundFetchMeetings = () => async (dispatch) => {
  const response = await meeting.get('/meeting');
  dispatch(fetchMeetings((response.data)));
};

export const boundFetchMeeting = (id) => async (dispatch) => {
  const response = await meeting.get(`/meeting/${id}`);
  dispatch(fetchMeeting(response.data));
};

export const boundEditMeeting = (id, formValues) => async (dispatch) => {
  const response = await meeting.patch(`/meeting/${id}`, formValues);
  dispatch(editMeeting(response.data));
  createHistory.push('/');
};

export const boundAddingMeetingPoints = (id, formValues) => async (dispatch) => {
  const response = await meeting.patch(`/meeting/${id}`, formValues);
  dispatch(addingMeetingPoints(response.data));
  createHistory.push('/');
};

export const boundDeleteMeeting = (id) => async (dispatch) => {
  await meeting.delete(`/meeting/${id}`);
  dispatch(deleteMeeting(id));
  createHistory.push('/');
};
