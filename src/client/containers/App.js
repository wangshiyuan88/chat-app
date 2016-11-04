import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
        <MuiThemeProvider>
            {this.props.children}
        </MuiThemeProvider>
    );
  }
}
