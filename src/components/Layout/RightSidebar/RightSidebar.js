import React, { Component } from 'react';
// import {BrowserRouter,Route,Link} from 'react-router-dom';
import classes from './RightSidebar.css';

// import UserSubMenu from '../../UserDashboard/UserMainMenu/UserSubMenu/UserSubMenu';
import UserMainMenu from '../../UserDashboard/UserMainMenu/UserMainMenu';
// import TopBarMenu from './TopBarMenu/TopBarMenu';

class RightSidebar extends Component {
    state={
        MainMenu:[1,2,3,4,5,6,7,8]
      }
    render() {
        const Mainmenu=this.state.MainMenu.map((person)=>{
            return <UserMainMenu
                    key={person}
                />});
        return (
            <div>
                {/* sidebar Started */}                               
                <div className={classes.mainmenu}>
                    {Mainmenu}
                </div>
                {/* sidebar Ended */}
            </div>
        )
    }
}
export default RightSidebar;
