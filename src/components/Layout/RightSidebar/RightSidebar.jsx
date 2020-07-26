import React, { Component } from 'react';
import './RightSidebar.css';
import UserMainMenu from '../../UserDashboard/UserMainMenu/UserMainMenu';

class RightSidebar extends Component {
    state={
            Menu:[
                {id:1 , menuname:'Fruit Salad',image:'../../../assets/MainMenu/veg_salad.jpg'},
                {id:2 , menuname:'Carrot Salad',image:'../../../assets/MainMenu/veg_salad.jpg'},
                {id:3 , menuname:'Cucumber Salad',image:'../../../assets/MainMenu/veg_salad.jpg'},
                {id:1 , menuname:'Veg Salad',image:'../../../assets/MainMenu/veg_salad.jpg'},
                {id:2 , menuname:'Carrot Salad',image:'../../../assets/MainMenu/veg_salad.jpg'},
                {id:1 , menuname:'Veg Salad',image:'../../../assets/MainMenu/veg_salad.jpg'},
                {id:2 , menuname:'Carrot Salad',image:'../../../assets/MainMenu/veg_salad.jpg'}
            ]
      }
      
    render() {
        const Mainmenu=this.state.Menu.map(person=>{
        return(<UserMainMenu 
                    imageaddress={person.image}
                    menuname={person.menuname}
                    key={person}/>)
        });
        return (
            <div>
                {/* sidebar Started */}                               
                <div className="mainmenu">
                    {Mainmenu}
                </div>
                {/* sidebar Ended */}
            </div>
        )
    }
}
export default RightSidebar;
