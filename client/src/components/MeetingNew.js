/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { boundCreateMeeting } from '../actions';
import MeetingForm from './MeetingForm';

class CreateaNewMeeting extends Component {
  onSubmit = formValues => {
    this.props.boundCreateMeeting(formValues);
  };

  render() {
    return (
      <div>
        <h4 className="m-3 text-center" style={{ width: 600 }}>
          Create New Meeting
        </h4>
        <MeetingForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { boundCreateMeeting }
)(CreateaNewMeeting);
