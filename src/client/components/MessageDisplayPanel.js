import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MessageListIterm from './MessageListItem';
import List from 'material-ui/List/List';

// export default class MessageInput extends Component {
//     constructor(prop){
//         super(prop);
//     }
//     render(){
//         return (
//             <div className="message-display-panel">
//             </div>
//         )
//     }
// }

export default (props) => {
    var messageItems = null;
    if(props.messages){
        messageItems = props.messages.map(function(message){
                    return (
                        <MessageListIterm {...message}/>
                    )
                });
    }
    return (
        <List className="message-display-panel">
            {messageItems}
        </List>
    )
}
