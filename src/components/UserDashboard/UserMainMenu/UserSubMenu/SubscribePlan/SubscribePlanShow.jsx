import React, { Component } from 'react';
import SubscribePlan from './SubscribePlan';
import './SubscribePlanShow.css';
class SubscribePlanShow extends Component {
    render() {
        return (
            <div>
                <SubscribePlan 
                    title="Weekly"
                    days="6 days"/>
                <SubscribePlan 
                    title="Monthly"
                    days="24 days"/>
            </div>                
        )
    }
}
export default SubscribePlanShow;