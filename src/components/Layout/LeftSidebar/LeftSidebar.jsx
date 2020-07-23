import React, { Component } from 'react';
import './LeftSidebar.css';
import LeftHeaderMenu from '../../UserDashboard/LeftHeaderMenu/LeftHeaderMenu';

class LeftSidebar extends Component {
    state={
        LeftMenu:[1]
      }

    render() {
        const leftmenu=this.state.LeftMenu.map((menu)=>{
            return <LeftHeaderMenu
                        key={menu}/>});
        return (
                 <div className="leftbar">
                    <div className="menuItemList">
                            {leftmenu}   
                    </div>
                </div>
        )
    }
}
export default LeftSidebar;