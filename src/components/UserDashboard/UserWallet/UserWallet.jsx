import React, { Component } from 'react'
import './UserWallet.css';
import { Link } from 'react-router-dom';

 class UserWallet extends Component {
        
    render() {
        return (
            <div className="UserWallet">

                <div className="grid-x">
                    <div className="cell small-14 medium-19 large-19" >
                        <input type="text" className="username" placeholder="Enter Promocode" />
                    </div>               
                    <div className="cell small-2 medium-1 large-1"> </div>      
                    <div className="cell small-6 medium-4 large-4" style={{marginTop:'-10px'}}>
                        <button type="button" className="button ">Apply</button>
                    </div>

                </div>

                <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12">Price Cost:</div>
                    <div className="cell small-12 medium-12 large-12 ">&#8377;560</div>
                </div>

                <div className="grid-x ">
                    <div className="cell small-12 medium-12 large-12">Wallet Balance:</div>
                    <div className="cell small-12 medium-12 large-12">&#8377;60</div>
                </div>

                <div className="grid-x">
                    <div className="cell small-12 medium-12 large-12">Discount Ammount:</div>
                    <div className="cell small-12 medium-12 large-12">&#8377;60</div>
                </div>
                
                <div style={{backgroundColor:'green',width:'100%',height:'10px',color:'green'}}>.</div>
                <div className="grid-x ">
                    <div className="cell small-12 medium-12 large-12">Total Ammount:</div>
                    <div className="cell small-12 medium-12 large-12">&#8377;500</div>
                </div>
                 <div className="grid-x">
                    <div className="cell  small-24 medium-24 large-24">
                        <Link to="/UserDashboard/UserSubMenu/ThankYou">
                            <button type="button" className="button cell">Subscribe</button>
                        </Link>
                    </div>
                </div>   
                   
        </div>
        )
    }
}
export default UserWallet;