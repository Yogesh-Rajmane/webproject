import React, { Component } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';
// import UserDash from '../UserDashboard/UserDash';

class UserLogin extends Component {
    render()
    {
        return (<div className="UserLogin">
                    <div className="loginForm">
                        <div className="grid-x">
                            <h1 className="cell large-24 medium-24 small-24 logintextmain"> Login</h1>
                            <h6 className="cell large-24 medium-24 small-24 logintextsub">Enter Your User Name and Password</h6>    
                        </div>
                        <form >
                            <div className="grid-x">
                                <label className="logintext cell large-6 medium-6 small-24">Your Name</label> 
                                <input type="text" className="cell large-18 medium-18 small-24 username" placeholder="test@gmail.com" required></input>
                            </div>
                        
                            <div className="grid-x" style={{marginTop:'15px'}}>
                                    <label className="loginpassword cell large-6 medium-6 small-24">Password</label> 
                                    <input type="password" className="cell large-18 medium-18 small-24 username" placeholder="Password" required></input>
                            </div>

                            <div className="grid-x terms" style={{marginTop:'25px'}}>
                                <input  type="checkbox" className="cell large-2 small-2 medium-2" required></input>
                                <label className="cell large-22 small-22 medium-22"><small>
                                    Agree to terms and conditions</small>
                                </label>
                            </div>

                            <div className="row" style={{marginTop:'40px'}}>
                               
                                <div className="grid-x">
                                    <div className="cell small-6 medium-6 large-6 ">
                                        <Link to="/UserDashboard">
                                            <button type="button" className="button login">Login</button>
                                        </Link>
                                    </div>
                                    <div className="cell small-12 medium-12 large-12"></div>
                                    <div className="cell small-6 medium-6 large-6">
                                    <Link to="/UserRegister">
                                            <button type="button" className="button register">Register</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>        
                            </form>
                     </div>
            </div>
                )
    }
}

export default UserLogin;