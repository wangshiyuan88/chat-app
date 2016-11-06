import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';
import UserSetting from '../containers/UserSetting';

export default (props) => {
    return (
      <Toolbar>
        <ToolbarGroup/>
        <ToolbarGroup>
            <ToolbarTitle text={props.displayName} />
            <img className="profile-img" src={props.photo}/>
            <ToolbarSeparator />
            <UserSetting />
        </ToolbarGroup>
      </Toolbar>
    );
}
