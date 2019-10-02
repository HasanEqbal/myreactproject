/*eslint-disable*/
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

export const createMeeting = (payload) => (
{
    type: CREATE_MEETING,
    payload
});

export const fetchMeetings = (payload) => (
{
  type: FETCH_MEETINGS,
  payload
});


export const fetchMeeting = (payload) => (
  {
    type: FETCH_MEETING,
    payload
  } 
);

export const editMeeting = (payload) => (
  {
    type: EDIT_MEETING,
    payload
  } 
);

export const addingMeetingPoints = (payload) => (
  {
    type: ADD_MEETING_POINTS,
    payload
  }
);

export const deleteMeeting = (id) => (
  {
    type: DELETE_MEETING,
    payload: id
  }
);

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
