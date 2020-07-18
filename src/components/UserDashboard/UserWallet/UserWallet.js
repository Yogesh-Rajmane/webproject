import React, { Component } from 'react'
import classes from './UserWallet.css';

 class UserWallet extends Component {
        
    render() {
        return (
            <div className={classes.UserWallet}>
                <div >
                <div className="grid-x grid-padding-x">
                    <div className="cell large-10" >
                        <input type="text" placeholder="Enter Promocode" />
                    </div>                     
                    <button type="button" class="button cell large-2">Apply</button>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="cell large-6">Price Cost:</div>
                    <div className="cell large-6 ">&#8377;560</div>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="cell large-6">Wallet Balance:</div>
                    <div className="cell large-6">&#8377;60</div>
                </div>

                <div className="grid-x grid-padding-x">
                    <div className="cell large-6">Discount Ammount:</div>
                    <div className="cell large-6">&#8377;60</div>
                </div>
                <div style={{backgroundColor:'green',width:'100%',height:'10px',color:'green'}}>.</div>
                <div className="grid-x grid-padding-x">
                    <div className="cell large-6">Total Ammount:</div>
                    <div className="cell large-6">&#8377;500</div>
                </div>
                    <button type="button" className="button cell">Subscribe</button>
                </div>
            </div>
        )
    }
}
export default UserWallet;