import React, { Component } from 'react';
import SubscribePlan from './SubscribePlan';
import classes from './SubscribePlanShow.css';
class SubscribePlanShow extends Component {
    render() {
        return (
            <div>
                    <div className={classes.plan}>
                         <SubscribePlan 
                            title="Weekly"
                            days="6 days"/>
                         <SubscribePlan 
                            title="Monthly"
                            days="24 days"/>
                        <SubscribePlan 
                            title="Monthly"
                            days="24 days"/>
                    </div>                
            </div>
        )
    }
}
export default SubscribePlanShow;