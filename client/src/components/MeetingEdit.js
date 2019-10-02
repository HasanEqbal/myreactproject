/* eslint-disable no-param-reassign */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boundFetchMeeting, boundEditMeeting } from '../actions';
import MeetingForm from './MeetingForm';

class MeetingEdit extends Component {
  componentDidMount() {
    this.props.boundFetchMeeting(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.boundEditMeeting(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.editMeetingDetail) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h4 className="m-3 text-center" style={{ width: 600 }}>
          Edit a Meeting
        </h4>
        <MeetingForm
          initialValues={['meetingDescription'].reduce((result, key) => { result[key] = this.props.editMeetingDetail[key]; return result; }, {})}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ editMeetingDetail: state.meetingDetails[ownProps.match.params.id] });
export default connect(
  mapStateToProps,
  { boundFetchMeeting, boundEditMeeting },
)(MeetingEdit);
