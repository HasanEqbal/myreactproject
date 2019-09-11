/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CreateaNewMeeting from './MeetingNew';
import MeetingEdit from './MeetingEdit';
import MeetingDelete from './MeetingDelete';
import MeetingShow from './MeetingShow';
import MeetingBoard from './MeetingBoard';
import createHistory from '../history';

class App extends Component {
  render() {
    return (
      <Router history={createHistory}>
      <Switch>
      <Route path="/" exact component={ MeetingBoard } />
      <Route path="/meeting/new" exact component={ CreateaNewMeeting } />
      <Route path="/meeting/edit/:id" exact component={ MeetingEdit } />
      <Route path="/meeting/deleteMeeting/:id" exact component={ MeetingDelete } />
      <Route path="/meeting/show/:id" exact component={ MeetingShow } />
      </Switch>
      </Router>);
  }
}

export default App;
