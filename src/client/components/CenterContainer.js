import React from 'react';

export default (props) => {
    const style = Object.assign({
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
    }, props.style);
    return (
        <div style={style}>
            {props.children}
        </div>
    );
}
