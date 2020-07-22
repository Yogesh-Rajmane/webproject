import React, { Component } from 'react';
import './UserDash.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import LeftSidebar from '../Layout/LeftSidebar/LeftSidebar';

class UserDash extends Component {

    componentDidMount(){
        $(document).ready(function(){
            $(".sidebar-btn").click(function(){
                $(".wrapper").toggleClass("collapse");
            });

            $(".rightIcon").click(function(){
                $(".wrapper").toggleClass("colla");
            });
        });
    }    
    render() {
        let smallmenu =null;

         smallmenu=( 
            <div className="header demo">
            <div className="header-menu" > 
            <div className="grid-x">
                <div className="cell large-3"> 
                    <div className="sidebar-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>

                <div className="cell large-12" >                    
                    <div className="search-box">
                        <div className="search">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="search" className="search-text" placeholder="search"/>
                    </div>
                </div>
                
                <div className="cell large-7" >
                    <ul>
                        <li><Link to="#"><i className="fas fa-shopping-cart"></i></Link></li>
                        
                {/* //////////////////////////////////////////////////////////        */}
                        <li><Link to="#"><i className="far fa-bell"><span className="blinkbell">.</span></i>
                            <div className="dropdown-bellsubmenu">
                                <div className="submenucontent"> 
                                    <Link to="#">
                                        <div className="first-padding " >
                                            <div className="grid-x">
                                                <div className="cell large-12 medium-12 small-12 notification-text" >
                                                    <p className="noficationtfirsttext">Notification</p>
                                                </div>
                                                <div className="notification-count cell large-12 medium-12 small-12">3</div>
                                            </div>
                                       </div>
                                       <div className="notification-card">
                                            <div className="grid-x">
                                                <div className="cell large-4 small-4 medium-2 ">
                                                <i className="fas fa-shopping-cart cardIcon "></i>
                                                </div>
                                                <div className="cell large-20 small-20 medium-22 card-heading ch1">
                                                        Your Order Ready For Ship!!
                                                </div>  
                                                <div className="cell large-24 small-24 medium-24">
                                                    <p className="notification-card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                        dolor sit amet consectetur
                                                    </p>
                                                </div>
                                            </div>
                                       </div>
                                       <div className="notification-card c2">
                                       <div className="grid-x">
                                                <div className="cell large-4 small-4 medium-2 ">
                                                <i className="fas fa-shopping-cart cardIcon cI2"></i>
                                                </div>
                                                <div className="cell large-20 small-20 medium-22 card-heading ch2" >
                                                        Your Order Ready For Ship!!
                                                </div>  
                                                <div className="cell large-24 small-24 medium-24">
                                                    <p className="notification-card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                        dolor sit amet consectetur
                                                    </p>
                                                </div>
                                            </div>
                                       </div>
                                       <div className="notification-card c3">
                                       <div className="grid-x">
                                                <div className="cell large-4 small-4 medium-2 ">
                                                <i className="fas fa-shopping-cart cardIcon cI3"></i>
                                                </div>
                                                <div className="cell large-20 small-20 medium-22 card-heading ch3" >
                                                        Your Order Ready For Ship!!
                                                </div>  
                                                <div className="cell large-24 small-24 medium-24">
                                                    <p className="notification-card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                        dolor sit amet consectetur
                                                    </p>
                                                </div>
                                            </div>
                                       </div>
                                       <div className="first-padding last-padding" >
                                            <div className="grid-x">
                                                <div className="cell large-24 medium-24 small-24 notification-text" >
                                                    <p className="noficationtfirsttext">All notification</p>
                                                </div>
                                            </div>
                                       </div>

                                    </Link>

                                </div>
                            </div>
                        </Link></li>
{/* //////////////////////////////////////////////////////////////////////////////// */}

                        <li className="bell"><Link to="#" ><i className="far fa-comment">
                                <span className="blinkbell">.</span>
                            </i></Link>
                        </li>
                    </ul>
                </div>

                <div className="cell large-2">
                    <li ><Link to="#">
                        <div className="dropdown-rightprofilepic">
                            <div className="profileImage"></div>                                
                            <div className="dropdown-content">    
                                <Link to="#"><i className="fas fa-user-circle profilelogo"></i>
                                                    <span className="profilelogotext">Edit Profile</span>
                                          
                                </Link>
                                <Link to="#"><i className="fas fa-envelope profilelogo"></i>
                                                    <span className="profilelogotext">Inbox</span>
 
                                </Link>
                                <Link to="#" className="thirdLine"><i className="fas fa-lock profilelogo"></i>
                                                    <span className="profilelogotext">Lock Screen</span>
                                            
                                </Link>
                                <Link to="#"><i className="fas fa-cog profilelogo"></i>
                                                    <span className="profilelogotext">Setting</span>
                                            
                                </Link>

                                <Link to="#"><i className="far fa-bell profilelogo"></i>
                                                    <span className="profilelogotext">Logout</span> 
                                            
                                </Link>
                            </div>
                        </div>
                    </Link></li>
                </div>
            </div>
            </div>
            </div>
)
        return (
            <div className="wrapper">
                    {/* header start for small screen*/}
                    <div className="show-for-small-only header">
                        <div className="grid-x ">
                            <div className="cell small-22 medium-22">
                                <div className="sidebar-btn" style={{marginLeft:'170px'}}><i className="fas fa-bars"></i></div>
                            </div>
                            <div className="cell small-2 medium-2" >
                                <div className="rightIcon">
                                    <i className="fa fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                 {/* header for small screen end */}

  
                    {/* header start for medium screen*/}
                    <div className="show-for-medium-only header" >
                        <div className="grid-x ">
                            <div className="cell small-22 medium-22">
                                <div className="sidebar-btn" style={{marginLeft:'170px'}}><i className="fas fa-bars"></i></div>
                            </div>
                            <div className="cell small-2 medium-2" >
                                <div className="rightIcon">
                                    <i className="fa fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                 {/* header for medium screen end */}
{/* //////////////////////////////////////////////////////////////////// */}
            <div className="hide-for-large header checking" >
                <div className="header-menu">
                <div className="grid-x">

                <div className="cell small-10" >                    
                    <div className="search-box">
                        <div className="search">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="search" className="search-text" placeholder="search"/>
                    </div>
                </div>
                
                <div className="cell small-10" >
                    <ul>
                        <li><Link to="#"><i className="fas fa-shopping-cart"></i></Link></li>
                      {/* //////////////////////////////////////////////////////////// */}
                      
                        <li><Link to="#"><i className="far fa-bell"><span className="blinkbell">.</span></i>
                            <div className="dropdown-bellsubmenu">
                                <div className="submenucontent"> 
                                    <Link to="#">
                                        <div className="first-padding " >
                                            <div className="grid-x">
                                                <div className="cell large-12 medium-12 small-12 notification-text" >
                                                    <p className="noficationtfirsttext">Notification</p>
                                                </div>
                                                <div className="notification-count cell large-12 medium-12 small-12">3</div>
                                            </div>
                                       </div>
                                       <div className="notification-card c1">
                                            <div className="grid-x">
                                                <div className="cell large-4 small-4 medium-2 ">
                                                <i className="fas fa-shopping-cart cardIcon"></i>
                                                </div>
                                                <div className="cell large-20 small-20 medium-22 card-heading ch1">
                                                        Your Order Ready For Ship!!
                                                </div>  
                                                <div className="cell large-24 small-24 medium-24">
                                                    <p className="notification-card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                        dolor sit amet consectetur
                                                    </p>
                                                </div>
                                            </div>
                                       </div>
                                       <div className="notification-card c2">
                                       <div className="grid-x">
                                                <div className="cell large-4 small-4 medium-2 ">
                                                <i className="fas fa-shopping-cart cardIcon cI2"></i>
                                                </div>
                                                <div className="cell large-20 small-20 medium-22 card-heading ch2" >
                                                        Your Order Ready For Ship!!
                                                </div>  
                                                <div className="cell large-24 small-24 medium-24">
                                                    <p className="notification-card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                        dolor sit amet consectetur
                                                    </p>
                                                </div>
                                            </div>
                                       </div>
                                       <div className="notification-card c3">
                                       <div className="grid-x">
                                                <div className="cell large-4 small-4 medium-2 ">
                                                <i className="fas fa-shopping-cart cardIcon cI3"></i>
                                                </div>
                                                <div className="cell large-20 small-20 medium-22 card-heading ch3" >
                                                        Your Order Ready For Ship!!
                                                </div>  
                                                <div className="cell large-24 small-24 medium-24">
                                                
                                                    <p className="notification-card-text">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                        dolor sit amet consectetur
                                                    </p>
                                                    </div>
                                            </div>
                                       </div>
                                       <div className="first-padding last-padding" >
                                            <div className="grid-x">
                                                <div className="cell large-24 medium-24 small-24 notification-text" >
                                                    <p className="noficationtfirsttext">All notification</p>
                                                </div>
                                            </div>
                                       </div>

                                    </Link>

                                </div>
                            </div>
                        </Link></li>
            {/* ///////////////////////////////////////////////////////////             */}
                        <li className="bell"><Link to="#" ><i className="far fa-comment">
                            <span>.</span>
                            </i></Link></li>
                    </ul>
                </div>
                <div className="cell small-4">
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
                </div>
            </div>

{/* ///////////////////////////////////////////////////////////////////////// */}
                
            {/* header for large screen start */}
           
                   <div className="show-for-large" style={{height:'30px'}}>
                         {smallmenu}
                   </div>

            {/* <!--header menu end for large -->

                    {/* sidebar start */}
                    <div className="sidebar">
                        <div className="sidebar-menu">
                            <div className="grid-x hide-for-small-only">
                                <div className="cell">
                                    <div className="app-logo ">
                                        <div className="app-logo_logo"></div>
                                        <h3 className="app-logo_appName">Fithulk</h3>
                                    </div> 
                                </div>
                            </div>
                            <div className="grid-x">
                                <div className="cell">
                                    <center className="profile">
                                        <img src="" alt=""/>
                                        <p>Yogesh</p>
                                        <small>Admin</small>
                                    </center>
                                </div> 
                            </div>
                            <LeftSidebar />
                        </div>
                    </div>
                {/* sidebar end */}
                

                {/* main container start */}
                <div className="main-container">            
                    <div className="card">
                        <p>Lorem Ipsum
                             is simply dummy text of the pri
                             nting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                            s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                {/* <!--main container end--> */}

                </div>
        )
    }
}
export default UserDash;