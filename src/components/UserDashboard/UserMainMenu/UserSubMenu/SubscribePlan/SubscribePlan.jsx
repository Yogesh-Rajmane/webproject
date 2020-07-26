import React from 'react';
import classes from './SubscribePlan.css';
const SubscribePlan=(props)=>{
    return (
        <div className={classes.SubscribePlan}>
            <div className="card">
                <div className="grid-x grid-padding-x">
                    <h5 className="cell small-12 medium-12 large-12  text-left">{props.title}</h5>
                    <p className="cell small-12 medium-12 large-12  text-center lead">{props.days}</p>
                    <a className="button cell small-12 medium-12 large-12" >Next</a>
                </div>
            </div>
        </div>
    )
}
export default SubscribePlan;