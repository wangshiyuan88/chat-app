import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TextField from 'material-ui/TextField';

export default class MessageInput extends Component {

    constructor(props){
        super(props);
        this.state =  {
            text: ''
        }
    }

    onChange(event){
        this.setState({
            text: event.target.value
        })
    }
    handleKeyPress(event){
        if(event.charCode===13 && !event.shiftKey){
            var postBody = {
                content: this.state.text,
                time: new Date(),
                user: this.props.user
            }

            this.props.postMessage(postBody);
            this.refs.textfield.setState({
                value: ''
            });
            this.setState({
                text: ''
            });
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
                  onKeyPress={this.handleKeyPress.bind(this)}
                  rows={2}
                  rowsMax={4}
                  value={this.state.text}
                  underlineShow={false}
                  onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}
