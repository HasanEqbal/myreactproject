/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class MeetingForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message" style={{ width: 600 }}>
          <div className="content">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ' '}`;
    return (
      <div className={className}>
        <label className="ui blue label text-center" style={{ width: 600 }}>
          Meeting Description
        </label>
        <input {...input} style={{ width: 600 }} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  onClicking = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="meetingDescription" component={this.renderInput} />
        <div className="row justify-content-center" style={{ width: 600 }}>
          <button className="ui button primary">Save</button>
          <Link to="/" className="ui button">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

const validate = (formValues) => {
  const error = {};
  if (!formValues.meetingDescription) {
    error.meetingDescription = 'You must be enter Meeting Description';
  }
  return error;
};

export default reduxForm({
  form: 'meetingDescription',
  validate,
})(MeetingForm);
