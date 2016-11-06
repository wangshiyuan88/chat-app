import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/auth';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';


export default class UserSetting extends Component {
  render() {
    return (
        <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="Sign Out" onClick={this.props.signOut}/>
        </IconMenu>
    );
  }
}

// export default connect( null, {signOut} )(UserSetting);
