import React from 'react';
import TextField from 'material-ui/TextField';


export function centerField(content){
    const style ={
        display: 'flex',
        justify-content: 'center',
        align-item: 'center'
    }
    return (
        <div style={style}>
            {content}
        </div>
    )
}

// export function renderButton({ label, meta: { touched, error }, ...custom }){
//     return (
//         <RaisedButton label="Secondary" secondary={true} style={style} />
//     )
// }
