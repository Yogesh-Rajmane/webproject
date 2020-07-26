import React, { Component} from 'react';
import './UserSubMenu.css';
import ImageComponent from '../../ImageComponent/ImageComponent';
import { Link } from 'react-router-dom';

class UserSubMenu extends Component {
    render() {
       return (
        <Link to="/UserDashboard/UserSubMenu/UserSelectedMenu">
        <div className="UserSubMenu">
        {/* /////////////Sub Menu Images start//////////// */}
        <div className="images"><ImageComponent image={this.props.imageaddress}/> </div>
        {/* /////////////Sub Menu Images end//////////// */}
        
   {/* ///////////////Menu Name Price and rating coding start/////////////////// */}
        <div className="description">
        
                <div className="grid-x">
                    <h4 className="submenuname cell small-24 medium-24 large-24">{this.props.menuname}</h4>     
                </div>
                <div className="grid-x">
                    <p className="menuspeciallity cell small-24 medium-24 large-24">North Indian,Panjabi</p>             
                </div>

                 <div className="grid-x">
                        <div className="cell small-6  medium-6 large-6"><p className="saladrating">&#9733;4.2</p></div>
                        <div className="show-for-small-only cell small-12 text-center  medium-12 large-12"><p className="deliverytime">31&#45;MINS</p></div>
                        <div className="hide-for-small-only cell small-12 text-center medium-12 large-12"><p className="deliverytime">31&#45;MINS</p></div>
                        <div className="cell small-6  medium-6 large-6"><p  className="saladrating deliverytime">&#8377;350</p></div>
                 </div>
   {/* ///////////////Menuheading, discription, Price and rating coding end/////////////////// */}
        </div>

    </div>
    </Link>

        )
    }
}

export default UserSubMenu;