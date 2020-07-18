import React, { Component } from 'react';
import classes from './UserSelectedMenu.css';
class UserSelectedMenu extends Component {
    render() {
        return (
            <div className={classes.selectedMenu}>
            <div className={classes.UserSelectedMenu}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th style={{textAlign:'center'}}>#</th>
                            <th style={{textAlign:'center'}}>Day</th>
                            <th style={{textAlign:'center'}}>Dish</th>
                            <th style={{textAlign:'center'}}>Price</th>
                            <th style={{textAlign:'center'}}>Status</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    <tr>
                        <th >1</th>
                        <td>MON</td>
                        <td>Veg Salad</td>
                        <td>&#8377; 370 /-</td>
                        <td><div>
                                <input type="checkbox"></input>
                                <span style={{margin:'10px',color:'green'}}>&#43;</span>
                                    <span style={{color:'red'}}>&minus;</span>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th >1</th>
                        <td>MON</td>
                        <td>Veg Salad</td>
                        <td>&#8377; 370 /-</td>
                        <td><div>
                                <input type="checkbox"></input>
                                <span style={{margin:'10px',color:'green'}}>&#43;</span>
                                    <span style={{color:'red'}}>&minus;</span>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th >2</th>
                        <td>MON</td>
                        <td>Veg Salad</td>
                        <td>&#8377; 370 /-</td>
                        <td><div>
                                <input type="checkbox"></input>
                                <span style={{margin:'10px',color:'green'}}>&#43;</span>
                                    <span style={{color:'red'}}>&minus;</span>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <th>3</th>
                        <td>MON</td>
                        <td>Veg Salad</td>
                        <td>&#8377; 370 /-</td>
                        <td><div>
                                <input type="checkbox"></input>
                                <span style={{margin:'10px',color:'green'}}>&#43;</span>
                                <span style={{color:'red'}}>&minus;</span>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>                              
            </div>
        </div>
        )
    }
}
export default UserSelectedMenu;