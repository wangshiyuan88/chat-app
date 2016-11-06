import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';


// export default class UserSetting extends Component {
//   render(props) {
//     function pullMoreMessageHandler(){
//         props.pullMoreMessage(props.start)
//     }
//     return (
//         <IconMenu
//                 iconButtonElement={
//                   <IconButton touch={true}>
//                     <NavigationExpandMoreIcon />
//                   </IconButton>
//                 }
//               >
//                 <MenuItem key="loadmore" primaryText="Load More" onClick={pullMoreMessageHandler}/>
//                 <MenuItem key="signout" primaryText="Sign Out" onClick={props.signOut}/>
//         </IconMenu>
//     );
//   }
// }

export default (props) => {
    function pullMoreMessageHandler(){
        props.pullMoreMessage(props.start)
    }
    return (
        <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem key="loadmore" primaryText="Load More" onClick={pullMoreMessageHandler}/>
                <MenuItem key="signout" primaryText="Sign Out" onClick={props.signOut}/>
        </IconMenu>
    );
}

// export default connect( null, {signOut} )(UserSetting);
