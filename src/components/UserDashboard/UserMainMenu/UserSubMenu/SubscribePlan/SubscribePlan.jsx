import React from 'react';
import './SubscribePlan.css';
import { Link } from 'react-router-dom';
const SubscribePlan=(props)=>{
    return (
        <div className="SubscribePlan">
            <div className="card">
                <div className="grid-x">
                    <h5 className="cell small-24 medium-24 large-24  text-left">{props.title}</h5>
                    <p className="cell small-24 medium-24 large-24  text-center lead">{props.days}</p>
                  <div className="cell small-24 medium-24 large-24">
                    <Link to="/UserDashboard/UserSubMenu/SubscribePlanSchedule">
                       <button className="button  offerbutton " >Next</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubscribePlan;