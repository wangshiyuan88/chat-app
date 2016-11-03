import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { login } from '../actions';
import { TextField } from 'redux-form-material-ui';
import { CenterContainer } from '../components/CenterContainer'

class LoginForm extends Component {


    onSubmit(props) {
        console.log(props);
    }

    renderField(props) {
        if (props.type!=='submit'){
            return (
                <CenterContainer style={props.parentStyle}>
                    <Field {...props}/>
                </CenterContainer>
            )
        }else{
            return (
                <CenterContainer style={props.parentStyle}>
                    <RaisedButton {...props}/>
                </CenterContainer>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;
        const fieldProps = {
            'username': {
                type: 'text',
                hintText: 'Username...',
                hintStyle: {
                    'color': 'white'
                },
                className: 'textfield',
                component: TextField,
                name: 'username'
            },
            'password': {
                type: 'text',
                hintText: 'Password..',
                hintStyle: {
                    'color': 'white'
                },
                className: 'textfield',
                component: TextField,
                name: 'passpord'
            },
            'submit': {
                label: 'LOGIN',
                type: 'submit',
                primary: True,
                component: RaisedButton,
                parentStyle: {
                    'marginTop': '20px'
                }
            },
        }
        return (
                <form className="login-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3 className="form-title">WELCOME</h3>
                    {this.renderField(fieldProps['username'])}
                    {this.renderField(fieldProps['password'])}
                    <div style={{'textAlign': 'center', 'marginTop': '20px'}}>
                        <Link to={'/signup'}>No account? Connect with Google</Link>
                    </div>
                    {this.renderField(fieldProps['submit'])}
                </form>

        );
    }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.title = 'Please enter username';
  }

  if(!values.password) {
    errors.content = 'Please enter password';
  }

  return errors;
}

export default reduxForm({
  form: 'LoginForm',
  validate
}, null, { login })(LoginForm);
