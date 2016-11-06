import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/Toolbar';
import UserSetting from './UserSetting';

export default (props) => {
    return (
      <Toolbar>
        <ToolbarGroup/>
        <ToolbarGroup>
            <ToolbarTitle text={props.displayName} />
            <img className="profile-img" src={props.photo}/>
            <ToolbarSeparator />
            <UserSetting signOut={props.signOut} start={props.start} pullMoreMessage={props.pullMoreMessage}/>
        </ToolbarGroup>
      </Toolbar>
    );
}
