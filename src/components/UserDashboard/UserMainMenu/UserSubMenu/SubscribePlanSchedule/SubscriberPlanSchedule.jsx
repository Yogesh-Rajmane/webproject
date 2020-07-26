import React, { Component } from 'react';
import './SubscriberPlanSchedule.css'
import { Link } from 'react-router-dom';

class SubscribePlanSchedule extends Component {
    state={
        plan:'weekly'
    }
    render(){
        return (
            <div className="SubscribePlanSchedule">
                <div className="grid-x">
                    <p className="cell small-24 medium-24 large-24 offerheading">{this.state.plan} Subscription</p>
                </div>
        
                <div className="margin">
                    <div className="grid-x ">
                        <div className="cell small-12 medium-12 large-12">Plan Cost:</div>
                        <div className="cell small-12 medium-12 large-12">&#8377;560</div>
                    </div>

                    <div className="grid-x ">
                        <div className="cell small-12 medium-12 large-12">Packing Cost:</div>
                        <div className="cell small-12 medium-12 large-12">&#8377;60</div>    
                    </div>            
                    <div className="grid-x ">
                        <div className="cell small-12 medium-12 large-12">Delivery Charge:</div>
                        <div className="cell small-12 medium-12 large-12">&#8377;50</div>
                    </div>
                    <div className="grid-x">
                        <div className="cell  hide-for-small-only small-14 medium-14 large-14 greenLine">.</div>    
                        <div className="cell show-for-small-only small-14 medium-14 large-16 greenLine">.</div>    
                        <div className="cell small-10 medium-10 large-10"></div>
                    </div>
                    <div className="grid-x">
                        <div className="cell small-12 medium-12 large-12">Total Cost:</div>
                        <div className="cell small-12 medium-12 large-12">&#8377;50</div>
                    </div>
                </div>
                <form>
                <div className="date">
                    <div className="grid-x">
                        <div className="cell small-6 medium-6 large-6">Start Date:</div>
                            <input type="date" className="dateSize username cell small-18 medium-18 large-18"></input>
                    </div>  
                </div>
                <div className="time">
                    <div className="grid-x">
                        <div className="cell small-6 medium-6 large-6 ">Delivery Time:</div>
                        <div className="cell small-18 medium-18 large-18">
                            <input type="time" className="timesize username"></input>
                        </div>
                    </div>
                </div>
                <div className="grid-x">
                        <input type="reset" className="button resetbutton cell small-24 medium-24 large-24" value="Reset"></input>
                    </div>
                </form>

                <div className="grid-x">
                    <div className="cell small-10 medium-10 large-10">
                        <Link to="/UserDashboard/UserSubMenu/Offer">
                        <button className="button">Back</button>
                        </Link>
                    </div>
                    <div className="cell small-4 medium-4 large-4"></div>
                    <div className="cell small-10 medium-10 large-10 text-right">
                        <Link to="/UserDashboard/UserSubMenu/UserAddress">
                             <button className="button">Next</button>
                        </Link>

                    </div>
                </div>    
            </div>
        )
    }
}
export default SubscribePlanSchedule;