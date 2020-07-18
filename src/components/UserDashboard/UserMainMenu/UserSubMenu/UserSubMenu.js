import React, { Component} from 'react';
import classes from './UserSubMenu.css';
import ImageComponent from '../../ImageComponent/ImageComponent';

class UserSubMenu extends Component {
    

    render() {

        return (
            
            <div className={classes.UserSubMenu} >
              <div className={classes.images}><ImageComponent/> </div>

                <div className={classes.description}>
                    <div className="row" >
                        <div className="grid-x grid-padding-x">
                            <div className="cell large-12">
                                <div>
                                    <h6 className="cell large-10" style={{fontWeight:'560'}}>Veg Salad</h6>
                                </div>
                                <div className="cell large-2"></div>
                            </div>
                            <div className="cell large-12"><p style={{fontSize:'12px'}}>North Indian,sald</p></div>
                            <div className="cell large-12" style={{display:'flex'}}>
                                <div className={classes.mar}><p style={{fontSize:'13px'}}>&#9733;4.2</p></div>
                                <div className={classes.mar}><p style={{fontSize:'12px'}}>31&#45;MINS</p></div>
                                <div className={classes.mar}><p style={{fontSize:'13px'}}>&#8377;350</p></div>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSubMenu;