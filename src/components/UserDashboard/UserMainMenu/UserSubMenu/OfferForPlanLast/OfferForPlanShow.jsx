import React, { Component } from 'react';
import OfferForPlan from './OfferForPlan';

 class OfferForPlanShow extends Component {
     state={
         offer:[1,2,3,4,5,6,7,8]
     }
    render() {
        let offerForPlan=null;
        offerForPlan=this.state.offer.map((person)=>{
            return <OfferForPlan 
            key={person}
            promocode="First 50"
            discount="500rs save"
            />
        })
        return (
            <div>
                {offerForPlan}
            </div>
        )
    }
}
export default OfferForPlanShow;