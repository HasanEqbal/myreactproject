/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { boundFetchMeeting, boundEditMeeting, boundAddingMeetingPoints } from '../actions';

class MeetingShow extends Component {
state = {
  meetingPoints: [],
}

componentDidMount() {
  this.props.boundFetchMeeting(this.props.match.params.id);
}

componentWillReceiveProps(props) {
  this.setState({
    // eslint-disable-next-line comma-dangle
    meetingPoints: props.meetingDetail.meetingPoints
  });
}

renderNewField() {
  const notes = (this.state.meetingPoints && [...this.state.meetingPoints]) || [];
  this.setState({ meetingPoints: [...notes, ''] });
}

handleChange(e, index) {
// eslint-disable-next-line react/no-direct-mutation-state
  this.state.meetingPoints[index] = e.target.value;
  this.setState({ meetingPoints: this.state.meetingPoints });
}

handleRemove(index) {
  this.state.meetingPoints.splice(index, 1);
  this.setState({ meetingPoints: this.state.meetingPoints });
}

handleSubmit() {
  this.props.boundAddingMeetingPoints(this.props.match.params.id, this.state);
}

renderPointsToBeDiscussed() {
  return (
 <div>
 <div className="row justify-content-center">
 <button onClick={(e) => this.renderNewField(e)} style = {{ width: 690 }} className="ui button primary btn-lg btn-block mb-2">Add meeting points</button>
  {this.state.meetingPoints && this.state.meetingPoints.map((meeting, index) => {
    return (
     <div key={index}>
     <div className="input-group mb-1">
     <div className="input-group-append">
     <input onChange={(e) => this.handleChange(e, index)} value={meeting} type="text" style = {{ width: 600 }} className="form-control" placeholder="Add meeting details Points" aria-label="Add meeting details Points" aria-describedby="button-addon2"/>
     <button onClick={() => this.handleRemove(index)} className="ui button negative" type="button" id="button-addon2">Remove</button>
     </div>
   </div>
     </div>
    );
  // eslint-disable-next-line comma-dangle
  })}
</div>
{this.state.meetingPoints ?
<div>
<div className="row justify-content-center">
<button onClick={(e) => this.handleSubmit(e)} className="ui button primary m-1">Submit</button>
<Link to="/" className="ui button m-1">Cancel</Link>
</div>
</div>
: " "}
 </div>
  );
}

  render() {
    if (!this.props.meetingDetail) {
      return <div>Loading...</div>;
    }
    return (
      <div>
      <h3 className="text-center mb-2">{this.props.meetingDetail.meetingDescription}</h3>
      {this.renderPointsToBeDiscussed()}
      </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { meetingDetail: state.meetingDetails[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { boundFetchMeeting, boundEditMeeting, boundAddingMeetingPoints })(MeetingShow);
