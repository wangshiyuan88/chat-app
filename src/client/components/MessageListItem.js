import React from 'react';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

export default (props) => {
    const avaStyle = {
        'margiRight': '2px',
        'borderRadius': '0px'
    }
    var key = props.time.toLocaleString().split().join('');
    var avatar = (
        <Avatar key={key+'-avatar'} src={props.user.photo} size={30} style={avaStyle} />
    )
    return (
        <ListItem key={key} disabled={true} leftAvatar={avatar}>
            <div className="message-meta" key={key+'-message-meta'}>
                <div className="message-sender-name" key={key+'-message-sender-name'}>{props.user.displayName}</div>
                <div className="message-time" key={key+'-message-time'}>{props.time.toLocaleString()}</div>
            </div>
            <div className="message-content" key={key+'-message-content'}>
                {breakLineHandle(props.content)}
            </div>
        </ListItem>
    );

    function breakLineHandle(content){
        var lines = content.split('\n');
        return lines.map(function(e, i){
            var temp = null;
            if(i!=lines.length-1){
                return (
                    <span>{e}<br/></span>
                )
            }else {
                return <span>{e}</span>
            }
        })
    };
}
