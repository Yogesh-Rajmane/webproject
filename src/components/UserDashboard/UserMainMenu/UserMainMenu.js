import React, { Component} from 'react';
import './UserMainMenu.css';
import ImageComponent from '../ImageComponent/ImageComponent';

class UserMainMenu extends Component {
    render() {
        return (
            <div className="UserMainMenu">
                {/* /////////////Main Menu Images start//////////// */}
                <div className="images"><ImageComponent/> </div>
                {/* /////////////Main Menu Images end//////////// */}
                
           {/* ///////////////Menu Name Price and rating coding start/////////////////// */}
                <div className="description">
                
                        <div className="grid-x ">
                            <div className="cell large-24">
                             <h3>Veg Salad</h3>
                             <div className="cell large-24"><p style={{fontSize:'12px'}}>North Indian,sald</p></div>                        
                         </div>

                         <div className="grid-x">
                                <div className="cell small-6  medium-6 large-6"><p className="mar">&#9733;4.2</p></div>
                                <div className="show-for-small-only cell small-12 text-center  medium-12 large-12"><p className="mar" style={{fontSize:'11px'}}>31&#45;MINS</p></div>
                                <div className="hide-for-small-only cell small-12 text-center medium-12 large-12"><p className="mar">31&#45;MINS</p></div>
                                <div className="cell small-6  medium-6 large-6"><p  className="mar">&#8377;350</p></div>
                         </div>
           {/* ///////////////Menu Name Price and rating coding end/////////////////// */}
                    </div>
                </div>
            </div>
            
        )
    }
}
export default UserMainMenu;