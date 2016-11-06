import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

export default (props) => {
    var friends = props.friends;
    if(!friends)
        return null;
    var renderFriends = [];
    friends.forEach(function(e){
        renderFriends.push(
            <ListItem disabled={true} key={e._id} style={{'color': 'white'}} primaryText={e.displayName} leftAvatar={
                <Avatar src={e.photo} />
            } />
        );
    });
    return (
        <Drawer docked={true} open={true} containerClassName="friend-panel">
            <Subheader style={{'color': 'white'}}>Talkers</Subheader>
            {renderFriends}
        </Drawer>
    );
}
