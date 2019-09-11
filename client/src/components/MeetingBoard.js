/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { boundFetchMeetings } from '../actions';


class MeetingBoard extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.boundFetchMeetings();
  }

  renderMeeting() {
    // eslint-disable-next-line react/prop-types
    if (!this.props.meetingDetails) {
      return (
       <div className="item">
       <div>You dont have any meetings</div>
       </div>
      );
    }
    return this.props.meetingDetails.map((meetingDetail) => (
      <div className="item" key={meetingDetail.id}>
      {this.renderEditAndDelete(meetingDetail)}
      <div className="p-3 bg-light border rounded">
      <Link to={`/meeting/show/${meetingDetail.id}`} data-toggle="tooltip" data-placement="top" title="Click on link to add meeting points">
      {meetingDetail.meetingDescription}
      </Link>
    </div>
    </div>
    ));
  }

  // eslint-disable-next-line class-methods-use-this
  renderEditAndDelete(meetingDetail) {
    return (
     <div className="right floated content">
    <Link to={`/meeting/edit/${meetingDetail.id}`} className="ui button primary m-1">EDIT</Link>
    <Link to={`/meeting/deleteMeeting/${meetingDetail.id}`} className="ui button negative m-1">DELETE</Link>
     </div>
    );
  }

  // eslint-disable-next-line class-methods-use-this
  renderCreateButton() {
    return (
  <React.Fragment>
  <Link to="/meeting/new" className="ui large button primary btn-lg btn-block">Create a new Meeting</Link>
  </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
      {this.renderCreateButton()}
      <h4 className="m-3 text-center">Meeting List</h4>
      <hr></hr>
      <div className="ui list">{this.renderMeeting()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ meetingDetails: Object.values(state.meetingDetails) });

export default connect(mapStateToProps, { boundFetchMeetings })(MeetingBoard);
