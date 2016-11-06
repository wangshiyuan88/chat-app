import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendPanel from '../components/FriendPanel';
import UserHeader from '../components/UserHeader';
import MessageInputPanel from '../components/MessageInputPanel';
import MessageDisplayPanel from '../components/MessageDisplayPanel';

import * as actions from '../actions/chat';
import { signOut } from '../actions/auth';


export class Chat extends Component {

  componentWillMount() {
    this.props.joinChannel();
  }

  render() {
    var {displayName, userID, photo, googleId} = this.props;
    var user = {
        displayName,
        userID,
        photo,
        googleId,
    }
    return (
        <div className="chat-panel">
            <UserHeader displayName={this.props.displayName} photo={this.props.photo} signOut={this.props.signOut} start={this.props.start} pullMoreMessage={this.props.pullMoreMessage}/>
            <FriendPanel className="friend-panel" friends={this.props.friends}/>
            <div className="message-panel">
                <MessageDisplayPanel messages={this.props.messages}/>
                <MessageInputPanel {...this.props} user={user}/>
            </div>
        </div>
    );
  }
}


function mapsStateToProps({ auth: {displayName, authenticated, _id, photo, googleId}, chat: { friends, messages, start } }){
    return {
        displayName,
        authenticated,
        userID: _id,
        photo,
        googleId,
        friends,
        messages,
        start
    }
}



export default connect( mapsStateToProps, {...actions, signOut} )(Chat);
