import React, { Component } from 'react';
import './UserRegister.css';
import { Link } from 'react-router-dom';

class UserForgotPage extends Component {
    render() {
        return (
            <div className="UserRegister">
                <form >
                    <h2 className="logintextmain" >Register</h2>
                   {/* First Name & Last Name Start  */}
                        <div class="grid-x" >
                            <div class="cell large-12 small-24 medium-12" style={{marginBottom:'10px'}}>
                                <span>Firstname
                                    <input type="text" placeholder="Firstname" />
                                </span>
                            </div>
                            <div class="cell large-12 small-24 medium-12 ">
                                <span>Lastname
                                    <input type="text" placeholder="Lastname" />
                                </span>
                            </div>
                        </div>
                    
                    {/* First Name & Last Name End  */}

                    {/* Mobile Number Start  */}
                        <div class="grid-x grid-padding-x">
                            <div class="cell small-24 medium-24">
                                <span>Mobiile Number
                                <input type="text" placeholder="Mobile Number" />
                                </span>
                            </div>
                        </div>   
                    {/* Mobile Number End  */}

                    {/* Radio Component Start  */}
                    <div className="row">
                            <div className="grid-x">
                    
                                <div className="cell large-6 small-24 medium-24 radiomain">
                                    <h4 className="radiomain">Gender:</h4>
                                </div>
                                <div className="show-for-small-only cell small-6"></div>
                                <div className="show-for-medium-only cell medium-6"></div>
                                <div className="cell large-6 small-7 medium-8 leftradio">
                                    <label className="radiocontainer">Male
                                        <input type="radio" name="gender"></input>
                                        <span className="circle"></span>
                                    </label>
                                </div>
                                
                                <div className="cell large-12 small-11 medium-10 rightradio">
                                    <label className="radiocontainer">Female
                                        <input type="radio" name="gender"></input>
                                        <span className="circle"></span>
                                    </label>
                                </div>
                            
                            </div>
                        {/* </fieldset>*/}
                    </div>
                    {/* Radio Component End  */}

                    {/* E-mail textbox start */}
                    <div className="row">
                        <div className="grid-x ">
                            <div className="cell small-24 medium-24 large-24">
                                <span>Email
                                    <div>
                                        {/* <span class="input-group-label">@</span> */}
                                        <input class="input-group-field" type="text" placeholder="test@gmail.com"/>
                                    </div>
                                </span>
                            </div>
                        </div>   
                    </div>
                    {/* E-mail textbox End */}
               
                    {/* Password textbox start */}
                    <div className="row">
                            <div className="grid-x ">
                                <div className="cell large-24 small-24 medium-24">
                                    <label>Password
                                        <input type="password" placeholder="Password"/>
                                    </label>
                                    <p >Your password must have at least 10 characters</p>                      
                                </div>
                            </div>   
                    </div>
                
                    {/* Password textbox End */}

                    {/* Upload File start */}
                    <div className="row">
                        <div className="grid-x grid-padding-x">
                            <div className="cell large-24">
                                <fieldset className="fieldset">
                                    <legend>Upload Photo</legend>
                                    <input type="file" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    {/* Upload File End */}

                    {/* Reset & Register Button Start */}
                    <div className="row">
                        <div className="grid-x grid-padding-x">
                            <div className="cell text-left small-6 medium-6 large-6 ">
                                <button type="reset" className="primary button">Reset</button>
                            </div>
                            <div className="cell small-12 medium-12 large-12"></div>
                            <div className="cell text-right small-6 medium-6 large-6">
                                <Link to="/" >
                                    <button type="button" className="primary button">Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Reset & Register Button End */}
                </form>
            </div>
        )
    }
}
export default UserForgotPage;