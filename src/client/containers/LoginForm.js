import React, { Component } from 'react';
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
