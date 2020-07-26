import React, { Component } from 'react';
import './UserSubMenuShow.css';
import UserSubMenu from './UserSubMenu';

 class UserSubMenuShow extends Component {
    state={
        SubMenu:[
            {id:1 , menuname:'Fruit Salad',image:''},
            {id:2 , menuname:'Egg Salad',image:''},
            {id:1 , menuname:'Fruit Salad',image:''},
            {id:2 , menuname:'Egg Salad',image:''},
            {id:1 , menuname:'Fruit Salad',image:''},
            {id:2 , menuname:'Egg Salad',image:''},
            {id:2 , menuname:'Fithulk Special',image:''}
        ]
  }
    render() {
        const Submenu=this.state.SubMenu.map((menu)=>{
            return (
            <a href="#"><UserSubMenu 
                        imageaddress={menu.image}
                        menuname={menu.menuname}
                        key={menu}
            /></a>
       )});
        return (
            <div> 
                    <div className="grid-x submenuname">
                        <div className=" cell large-24 medium-24 small-24">Veg Salad</div>
                    </div>
                    <div className="submenu1">
                        <div className="scrollmenu">
                             {Submenu}              
                         </div>          
                    </div>
            </div>
        )
    }
}
export default UserSubMenuShow;