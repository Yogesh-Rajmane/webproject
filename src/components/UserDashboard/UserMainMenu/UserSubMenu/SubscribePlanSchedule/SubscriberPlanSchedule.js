import React from 'react';
import classes from './SubscriberPlanSchedule.css';

const SubscribePlanSchedule = () => {
    return (
        <div className={classes.SubscribePlanSchedule}>
            <div className="grid-x grid-padding-x">
                <p className="cell lead" style={{backgroundColor:'green',color:'white'}}>Weekly Subscription</p>
            </div>
     
            <div className={classes.margin}>
                <div className="grid-x grid-padding-x">
                    <div className="cell small-6">Plan Cost:</div>
                    <div className="cell small-6">&#8377;560</div>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="cell small-6 large-6">Packing Cost:</div>
                    <div className="cell small-6 large-6">&#8377;60</div>    
                </div>            
                <div className="grid-x grid-padding-x">
                    <div className="cell small-6 large-6">Delivery Charge:</div>
                    <div className="cell small-6 large-6">&#8377;50</div>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="cell hide-for-small-only small-8 large-8"
                        style={{width:'65%', backgroundColor:'green',color:'green',height:'10px'}}>.</div>    
                    
                    <div className="cell show-for-small-only small-8 large-8"
                        style={{width:'85%', backgroundColor:'green',color:'green',height:'10px'}}>.</div>    
                    
       
                    <div className="cell small-4 large-4"></div>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="cell small-6 large-6">Total Cost:</div>
                    <div className="cell small-6 large-6">&#8377;50</div>
                </div>
            </div>
            <form>
            <div className={classes.date}>
                <div className="grid-x grid-padding-x">
                    <div className="cell small-3 medium-3 large-2" style={{marginTop:'1%'}}>Start Date:</div>
                    <div className="cell small-9 medium-9 large-9">
                        <input type="date" className={classes.dateSize}></input>
                    </div>
                </div>  
            </div>
            <div className={classes.time}>
                <div className="grid-x grid-padding-x">
                    <div className="cell small-3 medium-3 large-2" style={{marginTop:'1%'}}>Delivery Time:</div>
                    <div className="cell small-9 medium-9 large-9">
                        <input type="time" className={classes.timesize}></input>
                    </div>
                </div>
            </div>
            <div className="grid-x grid-padding-x">
                <div className="cell text-center">
                    <input type="reset" className="button secondary" value="Reset"></input>
                </div>
            </div>
            </form>

            <div className="grid-x grid-padding-x">
                <div className="cell small-6 medium-6 large-6">
                    <button className="button">Back</button>
                </div>
                <div className="cell small-6 medium-6 large-6 text-right">
                    <button className="button">Next</button>
                </div>
            </div>    
        </div>
    )
}
export default SubscribePlanSchedule;