import React from 'react';
import Paper from 'material-ui/Paper';

const PaperContainer = (prop) => (
    const { className, zDepth } = prop;
    return (
        <Paper className={className} zDepth={zDepth}>
            {this.props.content}
        </Paper>
    )
);

export default PaperContainer;
