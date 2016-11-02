import React from 'react';
import Paper from 'material-ui/Paper';

import LoginForm from '../containers/LoginForm';

const className = 'login';
const zDepth = 5;
const paperClass = 'paper';

const Login = () => {
    return (
        <div className={className}>
            <Paper className={paperClass} zDepth={zDepth}>
                <LoginForm />
            </Paper>
        </div>
    )
};

export default Login;
