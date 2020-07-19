import React, { Component } from 'react';
import './LeftSidebar.css';
import LeftHeaderMenu from '../../UserDashboard/LeftHeaderMenu/LeftHeaderMenu';

class LeftSidebar extends Component {
    state={
        LeftMenu:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      }

    render() {
        const leftmenu=this.state.LeftMenu.map((menu)=>{
            return <LeftHeaderMenu
                        key={menu}/>});
        return (
                 <div className="leftbar">
                    <div className="menuItemList">
                        <div className="menuItem">
                            {leftmenu}
                        </div>
                    </div>
                </div>
        )
    }
}
export default LeftSidebar;