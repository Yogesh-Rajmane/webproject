import React, { Component } from 'react';
import classes from './UserRegister.css';
import { Link } from 'react-router-dom';

class UserForgotPage extends Component {
    render() {
        return (
            <div className="UserRegister">
                <form >
                    <h2 className="text-center subheader" >Register</h2>
                   {/* First Name & Last Name Start  */}
                        <div class="grid-x grid-padding-x">
                            <div class="cell small-24 medium-12">
                                <span>First Name
                                    <input type="text" placeholder="First Name" />
                                </span>
                            </div>
                            <div class="cell small-24 medium-12 ">
                                <span>Last Name
                                    <input type="text" placeholder="Last Name" />
                                </span>
                            </div>
                        </div>
                    
                    {/* First Name & Last Name End  */}

                    {/* Mobile Number Start  */}
                        <div class="grid-x grid-padding-x">
                            <div class="cell small-24 medium-24">
                                <span>Mobiile Number
                                <input type="text" placeholder="First Name" />
                                </span>
                            </div>
                        </div>   
                    {/* Mobile Number End  */}

                    {/* Radio Component Start  */}
                    <div className="row">
                            <div className="grid-x grid-padding-x">
                                
                                <div className="cell large-6 small-24 medium-24">
                                    <h4 className="lead">Gender:</h4>
                                </div>

                                <div className="cell large-6 small-12 medium-4">
                                    <label className="radiocontainer">Male
                                        <input type="radio" name="gender"></input>
                                        <span className="circle"></span>
                                    </label>
                                </div>
                                
                                <div className="cell large-12 small-12 medium-20">
                                    <label className="radiocontainer">Female
                                        <input type="radio" name="gender"></input>
                                        <span className="circle"></span>
                                    </label>
                                </div>
                            
                                {/* <div className="cell large-4 small-4">
                                        <label className={classes.radiocontainer}>Other
                                                    <input type="radio" name="gender"></input>
                                                <span className={classes.circle}></span>
                                        </label>
                                </div> */}
                            </div>
                        {/* </fieldset>*/}
                    </div>
                    {/* Radio Component End  */}

                    {/* E-mail textbox start */}
                    <div className="row">
                        <div className="grid-x grid-padding-x">
                            <div className="cell small-24 medium-24">
                                <span>Email
                                    <div class="input-group">
                                        <span class="input-group-label">@</span>
                                        <input class="input-group-field" type="email" placeholder="test@gmail.com"/>
                                    </div>
                                </span>
                            </div>
                        </div>   
                    </div>
                    {/* E-mail textbox End */}
               
                    {/* Password textbox start */}
                    <div className="row">
                            <div className="grid-x grid-padding-x">
                                <div className="cell large-24 small-24 medium-24">
                                    <label>Password
                                        <input type="password" aria-describedby="passwordHelpText" placeholder="Password"/>
                                    </label>
                                    <p className="help-text" id="passwordHelpText">Your password must have at least 10 characters</p>                      
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
                            <div className="cell text-left small-12 medium-12 large-12 ">
                                <button type="reset" className="primary button">Reset</button>
                            </div>

                            <div className="cell text-right small-12 medium-12 large-12">
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