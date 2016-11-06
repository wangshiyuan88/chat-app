import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {getUserInfo} from '../actions/auth';


export class App extends Component {

  componentWillMount() {
      this.props.getUserInfo();
  }

  render() {
    return (
        <MuiThemeProvider>
            {this.props.children}
        </MuiThemeProvider>
    );
  }
}


export default connect( null, { getUserInfo } )(App);
