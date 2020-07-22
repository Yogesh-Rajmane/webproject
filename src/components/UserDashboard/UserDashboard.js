import React, { Component } from 'react';
import './UserDashboard.css';
import {Link} from 'react-router-dom';
import LeftSidebar from '../Layout/LeftSidebar/LeftSidebar';
import $ from 'jquery';

 class UserDashboard extends Component {

    componentDidMount(){
        $(document).ready(function(){
            $(".sidebar-btn").click(function(){
                $(".wrapper").toggleClass("collapse");
            });
        });
    }    
    render() {  
        return (
        <div style={{overflowX:'hidden'}}>
        {/* <!--wrapper start--> */}
        <div className="wrapper">
            {/* <!--header menu start--> */}
            
            <div className="header">
                <div className="header-menu">
                
                    <div className="sidebar-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                    
                    <div className="search-box">
                        <div className="search">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="search" className="search-text" placeholder="search"/>
                    </div>

                    <ul>
                        <li><Link to="#"><i className="fas fa-shopping-cart"></i></Link></li>
                        <li><Link to="#"><i className="far fa-bell"><span >.</span></i>
                        <div className="dropdown-bellsubmenu">
                            <div></div>
                            <div className="submenucontent">
                                
                            </div>
                        </div>
                        </Link></li>
                        <li className="bell"><Link to="#" ><i className="far fa-comment">
                            <span>.</span>
                            </i></Link></li>
                    </ul>
                    <li ><Link to="#">
                            <div className="dropdown-rightprofilepic">
                                <div className="profileImage"></div>                                
                                <div className="dropdown-content">    
                                    <Link to="#"><i className="far fa-bell">
                                                        <span>Home</span>
                                                </i>
                                    </Link>
                                    <Link to="#"><i className="far fa-bell">
                                                        <span>Home</span>
                                                </i>
                                    </Link>
                                    <Link to="#" className="thirdLine"><i className="far fa-bell">
                                                        <span>Home</span>
                                                </i>
                                    </Link>
                                    <Link to="#"><i className="far fa-bell">
                                                        <span>Edit</span>
                                                </i>
                                    </Link>
                                    <Link to="#"><i className="far fa-bell">
                                                        <span>Logout</span> </i>
                                                
                                    </Link>
                                </div>
                            </div>

                        </Link></li>
                </div>
            </div>
            {/* <!--header menu end-->


            <!--sidebar start--> */}
            <div className="sidebar">
                <div className="sidebar-menu">
                    <div className="app-logo">
                        <div className="app-logo_logo"></div>
                        <h3 className="app-logo_appName">Fithulk</h3>
                    </div>                    

                    <center className="profile">
                        <img src="" alt=""/>
                        <p>Yogesh</p>
                        <small>Admin</small>
                    </center>
                    
                    <LeftSidebar />

                    {/* <li className="item">
                        <Link to="#" className="menu-btn">
                            <i class="fas fa-desktop"></i><span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="item" id="profile">
                        <Link to="#profile" className="menu-btn">
                            <i className="fas fa-user-circle"></i><span>Profile <i className="fas fa-chevron-down drop-down"></i></span>
                        </Link>
                        <div className="sub-menu">
                            <Link to="#"><i className="fas fa-image"></i><span>Picture</span></Link>
                            <Link to="#"><i className="fas fa-address-card"></i><span>Info</span></Link>
                        </div>
                    </li>
                    <li className="item" id="messages">
                        <Link to="#messages" className="menu-btn">
                            <i className="fas fa-envelope"></i><span>Messages <i className="fas fa-chevron-down drop-down"></i></span>
                        </Link>
                        <div className="sub-menu">
                            <Link to="#"><i className="fas fa-envelope"></i><span>New</span></Link>
                            <Link to="#"><i className="fas fa-envelope-square"></i><span>Sent</span></Link>
                            <Link to="#"><i className="fas fa-exclamation-circle"></i><span>Spam</span></Link>
                        </div>
                    </li>
                    <li className="item" id="settings">
                        <Link to="#settings" className="menu-btn">
                            <i class="fas fa-cog"></i><span>Settings <i className="fas fa-chevron-down drop-down"></i></span>
                        </Link>
                        <div className="sub-menu">
                            <Link to="#"><i className="fas fa-lock"></i><span>Password</span></Link>
                            <Link to="#"><i className="fas fa-language"></i><span>Language</span></Link>
                        </div>
                    </li>
                    <li className="item">
                        <Link to="#" className="menu-btn">
                            <i className="fas fa-info-circle"></i><span>About</span>
                        </Link>
                    </li> */}

                </div>
            </div>

            {/* <!--sidebar end-->

            <!--main container start--> */}
            <div className="main-container">            
               <div className="card">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            {/* <!--main container end--> */}
        </div>
        {/* <!--wrapper end--> */}

    </div>)
    }
}
export default UserDashboard;