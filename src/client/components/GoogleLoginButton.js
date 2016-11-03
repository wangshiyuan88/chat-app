import React from 'react';
import CenterContainer from './CenterContainer';
import FlatButton from 'material-ui/FlatButton';
import LockOpen from 'material-ui/svg-icons/action/lock-open';


export default (props) => {
    return (
        <CenterContainer>
            <FlatButton
                label="Sign in with Google"
                labelPosition="after"
                primary={true}
                icon={<LockOpen />}
                {...props}
            />
        </CenterContainer>
    )
}
