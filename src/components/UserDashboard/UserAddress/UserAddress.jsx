import React, { Component } from 'react';
import './UserAddress.css';
import { Link } from 'react-router-dom';

class UserAddress extends Component{
    render(){

    return (
        <div className="UserAddress">
            <form>
                <div className="grid-x ">
                    <div className="cell small-24 medium-24 large-24">
                        <label >Enter Name</label>
                        <input type="text" className="username" placeholder="Enter Name" ></input>
                    </div>
                </div>
                <div className="grid-x ">
                    <div className="cell small-24 medium-24 large-24">
                        <label >Enter Mobile Number</label>
                        <input type="text" className="username" placeholder="Mobile Number"></input>
                    </div>
                </div>
{/* //////////////////////////////////////////////////////////////////////////////////// */}

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
                    </div>

{/* /////////////////////////////////////////////////////////////// */}
                    <div className="grid-x">
                        <div className="cell small-24 medium-24 large-24">
                            <label>Flat no/Building Name</label>
                            <input type="text" className="username"></input>
                        </div>
                    </div>

                    <div className="grid-x">
                        <div className="cell small-24 medium-24 large-24">
                            <label >Lane no/Lane Name</label>
                            <input type="text" className="username"></input>
                        </div>
                    </div>

                    <div className="grid-x ">
                            <div className="cell small-10 medium-10 large-10"> 
                                <button type="reset" className="button ">Reset</button>
                            </div>
                            <div className="cell small-4 medium-4 large-4"></div>
                            <div className="cell small-10 medium-10 large-10 ">
                                <Link to="/UserDashboard/UserSubMenu/OfferForPlanShow">
                                     <button type="button" className="button">Save & Next</button>
                                </Link>
                            </div>
                    </div>        
                    
                </form>
        </div>
    )
}
}
export default UserAddress;