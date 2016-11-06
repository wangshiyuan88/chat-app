import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TextField from 'material-ui/TextField';

export default class MessageInput extends Component {
    handleKeyPress(target){
        if(target.charCode===13 && !target.shiftKey){
            alert('Enter');
        }
    }
    onClickDiv(){
        this.refs.textfield.focus();
    }
    render(){
        return (
            <div className="message-input-panel" onClick={this.onClickDiv.bind(this)}>
                <TextField
                  ref="textfield"
                  floatingLabelText="I want to say..."
                  className="message-input-field"
                  multiLine={true}
                  fullWidth={true}
                  onKeyPress={this.handleKeyPress}
                  rows={2}
                  rowsMax={4}
                  underlineShow={false}
                />
            </div>
        )
    }
}
