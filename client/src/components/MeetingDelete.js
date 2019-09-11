/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteMeeting, fetchMeeting } from '../actions';
import Modal from './Modal';
import createHistory from '../history';

class MeetingDelete extends Component {
  componentDidMount() {
    this.props.fetchMeeting(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.deleteMeetingDetail) {
      return 'Are you sure you want to delete the meeting';
    }
    return `Are you sure you want to delete the meeting with description "${this.props.deleteMeetingDetail.meetingDescription}"`;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteMeeting(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Meeting"
        content={this.renderContent()}
        action={this.renderActions()}
        onDismiss={() => createHistory.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  // eslint-disable-next-line comma-dangle
  deleteMeetingDetail: state.meetingDetails[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchMeeting, deleteMeeting },
)(MeetingDelete);
