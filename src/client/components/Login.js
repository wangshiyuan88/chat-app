import React from 'react';
import Paper from 'material-ui/Paper';

import LoginForm from '../containers/LoginForm';

const className = 'login';
const zDepth = 5;
const paperClass = 'paper';

export default () => {
    return (
        <div className={className}>
            <Paper className={paperClass} zDepth={zDepth}>
                <LoginForm />
            </Paper>
        </div>
    )
};
