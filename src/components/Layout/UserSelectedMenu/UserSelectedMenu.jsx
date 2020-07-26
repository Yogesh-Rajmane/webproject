import React, { Component } from 'react';
import './UserSelectedMenu.css';
import Tablerow from './Tablerow';
import { Link } from 'react-router-dom';
class UserSelectedMenu extends Component {
    state={
        menu:[{id:1,day:'Mon',menuname:'Seasonal Fruit Salad',price:90},
              {id:2,day:'Tue',menuname:'Rainbow Fruit Salad',price:90},
              {id:3,day:'Wed',menuname:'Sunshine Fruit Salad',price:85},
              {id:4,day:'Thu',menuname:'Ruby Fruit Salad',price:90},
              {id:5,day:'Fri',menuname:'Tropical Fruit Salad',price:90},
              {id:6,day:'Sat',menuname:'Fit Fruit Salad',price:85}],
         total:40
    }
    render() {
        let tablerow=this.state.menu.map(row=>{
            return <Tablerow 
                    key={row.id}
                     indexid={row.id}
                     day={row.day}
                     menuname={row.menuname}
                     price={row.price} 
                     check={row.checking}
            />
        })
        return (
            <div className="selectedMenu">
            <div>
                    <table className="table">   
                        <tr className="tablerow rowheading">
                            <th>#</th>
                            <th>Day</th>
                            <th>Dish</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                        {tablerow}
                    </table>      
                <div className="grid-x">
                      <p className="cell large-24 medium-24 small-24 totalammount">Total Saving Ammount: &#8377;60</p>
                </div>                  
                <div className="grid-x">
    
                    <div className="cell small-6 medium-6 large-6 ">
                        <Link to="/UserDashboard/UserSubMenu">
                            <button type="button" className="button login customize">Back</button>
                        </Link>
                    </div>
                    <div className="cell small-12 medium-12 large-12">
                            <button type="button" className="button register customize">Total: &#8377;{this.state.total}</button>
                    </div>
                    <div className="cell small-6 medium-6 large-6">
                    <Link to="/UserDashboard/UserSubMenu/Offer">
                            <button type="button" className="button register customize">Add To Cart</button>
                    </Link>
                    </div>
    
                </div>      
            </div>
        </div>
        )
    }
}
export default UserSelectedMenu;