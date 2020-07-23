import React, { Component} from 'react';
import classes from './UserMainMenu.css';
import ImageComponent from '../ImageComponent/ImageComponent';

class UserMainMenu extends Component {
    render() {
        return (
            <div className={classes.UserMainMenu}>
                <div className={classes.images}><ImageComponent/> </div>
                <div className={classes.description}>
                    <div  >
                        <div className="grid-x ">
                            <div className="cell large-24">
                             <h6 style={{fontWeight:'560'}}>Veg Salad</h6>
                             <div className="cell large-24"><p style={{fontSize:'12px'}}>North Indian,sald</p></div>
                        
                         </div>
                         <div className="grid-x">
                                <div className="cell small-6  medium-6 large-6"><p className={classes.mar}>&#9733;4.2</p></div>
                                <div className="show-for-small-only cell small-12 text-center  medium-12 large-12"><p className={classes.mar}style={{fontSize:'11px'}}>31&#45;MINS</p></div>
                                <div className="hide-for-small-only cell small-6 text-center medium-6 large-6"><p className={classes.mar}>31&#45;MINS</p></div>
                                <div className="cell small-6  medium-6 large-6"><p  className={classes.mar}>&#8377;350</p></div>
                         </div>


                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default UserMainMenu;