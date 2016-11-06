import React, { Component } from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';

export default () => {
    return (
        <div className="login-form">
            <h3 className="form-title">WELCOME</h3>
            <GoogleLoginButton/>
        </div>
    );
}
