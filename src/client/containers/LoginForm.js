import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { login } from '../actions';
import { TextField } from 'redux-form-material-ui';
import CenterContainer from '../components/CenterContainer';
import GoogleLoginButton from '../components/GoogleLoginButton';

class LoginForm extends Component {
    render() {
        return (
                <div className="login-form">
                    <h3 className="form-title">WELCOME</h3>
                    <GoogleLoginButton/>
                </div>

        );
    }
}

export default LoginForm;
