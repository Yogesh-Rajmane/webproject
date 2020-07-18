import React from 'react';
import './LeftHeaderMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const LeftHeaderMenu = (props)=>{
    return(
        <Link to="/UserDashboard/MainMenu">
        <div className="LeftHeaderMenu">        
            <div className="row">
                <div className="grid-x">
                    <div className="cell">
                        <div className="grid-x">
                            <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                            <div className="cell small-18 medium-16 large-18"><p style={{marginLeft:'9%'}}>Order</p></div>
                            <div className="cell small-2 medium-4 large-2 text-right" >></div>
                        </div>
                    </div>
                </div>
            </div>                      
        </div>
        </Link>
    )
}
export default LeftHeaderMenu;