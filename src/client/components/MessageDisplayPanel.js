import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MessageListIterm from './MessageListItem';
import List from 'material-ui/List/List';

export default class MessageDisplayPanel extends Component {
    componentDidUpdate() {
      var node = this.refs.displayPanel;
      node.scrollTop = node.scrollHeight;
    }
    render(){
        var messageItems = null;
        if(this.props.messages){
            messageItems = this.props.messages.map(function(message){
                        return (
                            <MessageListIterm {...message}/>
                        )
                    });
        }
        return (
            <div ref="displayPanel" className="message-display-panel">
                <List>
                    {messageItems}
                </List>
            </div>
        )
    }
}
