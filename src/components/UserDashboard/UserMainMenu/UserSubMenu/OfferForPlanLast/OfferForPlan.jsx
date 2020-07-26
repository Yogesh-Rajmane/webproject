import React from 'react';
import classes from './OfferForPlan.css';
const OfferForPlan=(props)=>{
    return (
            <div className={classes.OfferForPlan}>
                <div>
                    <div className="card" style={{backgroundColor:'lightgray',color:'white'}}>
                        <div className="grid-x grid-padding-x">
                            <h5 className="cell large-6">{props.promocode}</h5>
                            <h6 className="cell large-6 text-right">{props.discount}</h6>
                        </div>
                        <p className="cell large-12 text-center"> For First50 old user </p>

                        <div className="grid-x grid-padding-x">
                            <h6 className="cell large-2">Promocode:</h6>
                            <h6 className="cell large-10">{props.promocode}</h6>
                        </div>
                            <a className="cell large-12 button">Select</a>
                    </div>
                </div>
            </div>
    )
}
export default OfferForPlan;