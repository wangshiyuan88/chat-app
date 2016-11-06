import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendPanel from '../components/FriendPanel';
import UserHeader from '../components/UserHeader';
import MessageInputPanel from '../components/MessageInputPanel';
import MessageDisplayPanel from '../components/MessageDisplayPanel';

import * as actions from '../actions/chat';
import { signOut } from '../actions/auth';


export class Chat extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.joinChannel();
  }

  render() {
    return (
        <div className="chat-panel">
            <UserHeader displayName={this.props.displayName} photo={this.props.photo} signOut={this.props.signOut}/>
            <FriendPanel className="friend-panel" friends={this.props.friends}/>
            <div className="message-panel">
                <MessageDisplayPanel />
                <MessageInputPanel />
            </div>
        </div>
    );
  }
}


function mapsStateToProps({ auth: {displayName, authenticated, _id, photo, googleId}, chat: {friends} }){
    return {
        displayName,
        authenticated,
        userID: _id,
        photo,
        googleId,
        friends
    }
}



export default connect( mapsStateToProps, {...actions, signOut} )(Chat);
