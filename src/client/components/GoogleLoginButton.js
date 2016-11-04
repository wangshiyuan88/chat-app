import React from 'react';
import CenterContainer from './CenterContainer';
import FlatButton from 'material-ui/FlatButton';
import LockOpen from 'material-ui/svg-icons/action/lock-open';


export default (props) => {
    var login = () => {
        location.href = '/auth/google';
    }
    return (
        <CenterContainer>
            <FlatButton
                className="google-signin-button"
                label="Sign in with Google"
                labelPosition="after"
                primary={true}
                icon={<LockOpen />}
                onClick={login}
                {...props}
            />
        </CenterContainer>
    )
}
