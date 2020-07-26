import React from 'react';
import './OfferForPlan.css';
import { Link } from 'react-router-dom';
const OfferForPlan=(props)=>{
    return (
            <div className="OfferForPlan">
                <div>
                    <div className="card">
                        <div className="grid-x ">
                            <p className="cell small-12 medium-12 large-12 ">{props.promocode}</p>
                            <p className="cell small-12 medium-12 large-12 ">{props.discount}</p>
                        </div>
                        <div className="grid-x">
                               <p className="cell small-24 medium-24 large-24 "> For First50 old user </p>
                        </div>
 
                        <div className="grid-x ">
                            <p className="cell small-4 medium-4 large-4">Promocode:</p>
                            <p className="cell small-20 medium-20 large-20">{props.promocode}</p>
                        </div>
                        <div grid-x>
                            <div>
                                <Link to="/UserDashboard/UserSubMenu/UserWallet">
                                <button className="cell small-24 medium-24 large-24 button">Select</button>
                                </Link>
                            </div>
                                
                        </div>

                    </div>
                </div>
            </div>
    )
}
export default OfferForPlan;