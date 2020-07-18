import React, { Component } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';

class UserLogin extends Component {
    render()
    {
        return (<div className="UserLogin">
                    <div className="loginForm">
                    <div>
                       <h1 className="text-center subheader"> Login</h1>
                        <h6 className="text-center subheader">Enter Your User Name and Password</h6>    
                    </div>

                        <form style={{marginTop:'10%'}}>
                            <div className="row">
                                <div className="grid-x">
                                <div className="cell large-24 medium-24 small-24">
                                    <label className="logintext">Your Name</label> 
                                     <input type="text" placeholder="test@gmail.com" required></input>
                                </div>
                                </div>
                            </div>

                            <div style={{marginTop:'10px'}}>
                                <div className="row">
                                   
                                    <div >
                                        <label className="logintext">Password</label> 
                                        <input type="password" placeholder="Password" required></input>
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop:'20px'}}>
                                <div >
                                    <div >
                                        <input  type="checkbox" id="invalidCheck2" required></input>
                                        <label className="lead"><small>
                                            Agree to terms and conditions</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        

                                <div className="row" style={{marginTop:'40px'}}>
                                
                                <div className="grid-x grid-padding-x">
                                    <div className="cell  small-12 medium-12 large-12 ">
                                        <Link to="/UserDashboard">
                                        <button type="reset" className="primary button">Login</button>
                                        </Link>
                                    </div>
                                    <div className="cell text-right small-12 medium-12 large-12">
                                    <Link to="/UserRegister">
                                            <button type="button" className="primary button">Register</button>
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