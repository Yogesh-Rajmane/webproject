import React, { Component } from 'react';
import classes from './UserSubMenuShow.css';
import UserSubMenu from './UserSubMenu';
 class UserSubMenuShow extends Component {
    state={
        SubMenu:[1,2,3,4,5,6,7,8,9]
      }
    render() {
        const Submenu=this.state.SubMenu.map((person)=>{
            return <UserSubMenu
                    key={person}
                />});
        return (
            <div>
                {/* sidebar Started */}                
                <div className={classes.mainmenu}>
                    {Submenu}
                </div>
                {/* sidebar Ended */}
            </div>
        )
    }
}
export default UserSubMenuShow;