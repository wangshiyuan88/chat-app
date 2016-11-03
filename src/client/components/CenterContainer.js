import React from 'react';

export const CenterContainer = React.createClass({
    render: function(){
        const style = Object.assign({
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
        }, this.props.style);
        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
})
