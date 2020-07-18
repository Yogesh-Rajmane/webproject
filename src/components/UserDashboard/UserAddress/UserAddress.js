import React from 'react';
import classes from './UserAddress.css';
 const UserAddress = () => {
    return (
        <div className={classes.UserAddress}>
            <div className={classes.UserAddressElement}>
            <form>
                <div className="grid-x grid-padding-x">
                    <div className="cell">
                        <label >Enter Name</label>
                        <input type="text" placeholder="Enter Name" ></input>
                    </div>

                    <div className="cell">
                        <label >Enter Mobile Number</label>
                        <input type="text" placeholder="Mobile Number"></input>
                    </div>
                    
                    <div className="cell" style={{marginLeft:'40%'}}>
                        
                        <label style={{marginLeft:'4%'}}>Address Save As</label>
                        <div style={{display:'flex'}}>
                            <div>
                                <input type="radio" value="option1" checked>
                                </input><label>Home</label>
                            </div>
                            <div style={{marginLeft:'6%'}}>
                                <input type="radio" value="option2">
                                </input><label>Office</label>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <label>Flat no/Building Name</label>
                        <input type="text" ></input>
                    </div>

                    <div className="cell">
                        <label >Lane no/Lane Name</label>
                        <input type="text"></input>
                    </div>
                    </div>

                    <div className="grid-x grid-padding-x">
                            <div className="cell small-6 medium-6 large-6"> 
                                <button type="reset" className="button secondary">Reset</button>
                            </div>
                            <div className="cell small-6 medium-6 large-6 text-right">
                                <button type="button" className="button">Save & Next</button>
                            </div>
                    </div>        
                    
                </form>

            </div>
        </div>
    )
}
export default UserAddress;