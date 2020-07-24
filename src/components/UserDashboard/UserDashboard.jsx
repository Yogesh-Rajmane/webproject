import React, { Component } from 'react';
import './UserDashboard.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import LeftSidebar from '../Layout/LeftSidebar/LeftSidebar';
import RightSidebar from '../Layout/RightSidebar/RightSidebar';


class UserDashboard extends Component {

    componentDidMount(){
        $(document).ready(function(){
             var i=0;

////////////////////jquery code for showing friend list (on click message icon) (small-medium-large screen) start/////////////////////////////////////////////
             $(".bellicon").click(function(){     
                if(i===0)
                {   
                    i=i+1
                    $(".wrapper .msgsubmenucontent").css("display","block")
                    $(".wrapper .msgsubmenucontent").css("animation","slidemsg .8s")
               
                }
                else{
                        $(".wrapper .msgsubmenucontent").css("display","none")
                        i=i-1
                    }
            });
/////////////////////jquery code for showing friend list (on click message icon) (small-medium-large screen) end//////////////////////////////////////////////////////////////////
           
//////////////jquery code for create another copy of wrapper(small-medium-large screen)start///////////////////////////////////////////////////
            $(".sidebar-btn").click(function(){
                $(".wrapper").toggleClass("collapse");
            });
            $(".sidebar-btn-smallmenu").click(function(){
                $(".wrapper").toggleClass("smallscreen");
            });
//////////////jquery code for create another copy of wrapper(small-medium-large screen)end///////////////////////////////////////////////////

//////////////jquery code for create another copy of wrapper(small-medium-large screen)start  Note:-(three dot)///////////////////////////////////////////////////          
            $(".rightIcon").click(function(){
                $(".wrapper").toggleClass("colla");
            });
//////////////jquery code for create another copy of wrapper(small-medium-large screen)end///////////////////////////////////////////////////
        });
    }    
    render() {
  ///////////////Header menu bar for large screen start////////////////////////////////////////////////////////////////////      
        
        let largemenu =null;
        let inputsearch=null;
        inputsearch=(<div className="search-box">  
                        <div className="search">
                             <i className="fas fa-search"></i>
                         </div>
                        <input type="search" className="search-text" placeholder="search"/>
                    </div>);
        
        largemenu=(<div className="header demo">
        <div className="header-menu" > 
            
            <div className="grid-x">             
                <div className="cell large-3">      {/* sidebar menu using font awesome icon start*/} 
                    <div className="sidebar-btn">
                        <i className="fas fa-bars"></i>
                    </div>                           {/* sidebar menu using font awesome icon end*/}
                </div>

                <div className="cell large-12" >
                    {inputsearch}  
                {/* search text box start*/}                  
                    {/* <div className="search-box">  
                        <div className="search">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="search" className="search-text" placeholder="search"/>
                    </div>                    */}
                         {/* search text box end*/}
                </div>
                
                <div className="cell large-7" >
                    <ul>  {/* shopping cart notification menu and message menu  start*/}
                            {/* shopping cart start*/}
                        <li><Link to="#"><i className="fas fa-shopping-cart"></i></Link></li>
                              {/* shopping cart end*/}

                            {/* //////////Notification menu coding start////////*/}

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
                    {/* /////////Notification menu coding end/////////////////////////////// */}

                    {/* message menu coding start*/}
                        <li className="bell bellicon"><Link to="#" className="msglink"><i className="far fa-comment"><span className="blinkbell ">.</span></i>
                            <div className="dropdown-msgsubmenu">
                                <div className="msgsubmenucontent msgsubmenucontent1"> 

                                    <div className="grid-x msgfriendtext">
                                          <h3 className="cell large-24 medium-24 small-24 textfriend">Friend List</h3>
                                    </div>
                                    <div className="grid-x msgsearch ">
                                        <div className="cell large-24 medium-24 small-24">
                                            <input type="search" className="searchinput" placeholder="search friend"></input>
                                        </div>
                                    </div>
                    
                                    <div className="grid-x msgsearch friendlist">
                                        <div className="friendphoto">
                                            <div className="statusindicator"></div>
                                        </div>

                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Yogesh Rajmane</h3>
                                                <h4 className="online">Online</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-x msgsearch friendlist f2">
                                        <div className="friendphoto ">
                                            <div className="statusindicator "></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Sunil Shinde</h3>
                                                <h4 className="online">Online</h4>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid-x msgsearch friendlist f3">
                                        <div className="friendphoto ">
                                            <div className="statusindicator "></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Sunil Shinde</h3>
                                                <h4 className="online">Online</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-x msgsearch friendlist f4">
                                        <div className="friendphoto ">
                                            <div className="statusindicator s4"></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Rahul Shinde</h3>
                                                <h4 className="online">offline</h4>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid-x msgsearch friendlist f4">
                                        <div className="friendphoto ">
                                            <div className="statusindicator s4"></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Rahul Shinde</h3>
                                                <h4 className="online">offline</h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                        </li>
                    {/* //////////message menu coding end/////////////////////////////// */}
                    </ul>      {/* shopping cart notification menu and message menu coding end*/}

                </div>
                    {/* header menu bar right side profile image coding start*/}
                <div className="cell large-2">
                    <li ><Link to="#">
                        <div className="dropdown-rightprofilepic">
                            <div className="profileImage">
                                <div className="profileImageblinking"></div>
                                <div className="prof"></div>
                            </div>                                
                            <div className="dropdown-content">    

                                <Link to="#"><i className="fas fa-user-circle profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Edit Profile</span>
                                          
                                </Link>
                                <Link to="#"><i className="fas fa-envelope profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Inbox</span>
 
                                </Link>
                                <Link to="#" className="thirdLine"><i className="fas fa-lock profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Lock Screen</span>
                                            
                                </Link>
                                <Link to="#"><i className="fas fa-cog profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Setting</span>
                                            
                                </Link>

                                <Link to="#"><i class="fas fa-sign-out-alt profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Logout</span> 
                                            
                                </Link>

                            </div>
                        </div>
                    </Link></li>
                </div>
                    {/* header menu bar right side profile image coding end*/}
            </div>
            </div>
            </div>

)
///////////////Header menu bar for large screen end////////////////////////////////////////////////////////////////////      
        return (
            <div className="wrapper">
                    {/* header start for small screen*/}
                    <div className="show-for-small-only header ">
                        <div className="grid-x ">
                            <div className="cell small-22 medium-22">
                                <div className="sidebar-btn sidebar-btn-smallmenu" style={{marginLeft:'170px'}}><i className="fas fa-bars"></i></div>
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
                    <div className="show-for-medium-only header ">
                        <div className="grid-x ">
                            <div className="cell small-22 medium-18">
                                <div className="sidebar-btn sidebar-btn-medium" style={{marginLeft:'170px'}}><i className="fas fa-bars"></i></div>
                            </div>
                            {/* <div className="cell show-for-medium-only medium-1"></div> */}
                            <div className="cell small-2 medium-4" >
                                <div className="rightIcon">
                                    <i className="fa fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                 {/* header for medium screen end */}
{/* //////////////////////////////////////////////////////////////////// */}


{/* ///////////////Header menu bar start for small and meduium screen start /////////////////////////////////////////////////////////////////// */}

        <div className="hide-for-large header checking headersmall headermedium" >
            <div className="header-menu">
                
                <div className="grid-x">
                <div className="cell small-10 medium-10">
                    {inputsearch}
                    {/* <div className="search-box">  
                        <div className="search">
                            <i className="fas fa-search"></i>
                        </div>
                        <input type="search" className="search-text" placeholder="search"/>
                    </div> */}
                </div>

                
                <div className="cell small-10 medium-10" >
                        {/* shopping cart notification and message menu coding start */}
                    <ul>   
                        <li><Link to="#"><i className="fas fa-shopping-cart"></i></Link></li>

                      {/* //////Notification menu coding start//////////////////////////////////////// */}
                      
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
                         {/* /////////Notification menu coding end///////////////////*/}
                        
                        {/* //////////////message menu coding start//////////////////// */}
                        <li className="bell bellicon"><Link to="#" ><i className="far fa-comment"><span className="blinkbell ">.</span></i>
                         
                            <div className="dropdown-msgsubmenu">
                                <div className="msgsubmenucontent"> 

                                    <div className="grid-x msgfriendtext">
                                          <h3 className="cell large-24 medium-24 small-24 textfriend">Friend List</h3>
                                    </div>
                                    <div className="grid-x msgsearch ">
                                        <div className="cell large-24 medium-24 small-24">
                                            <input type="search" className="searchinput" placeholder="search friend"></input>
                                        </div>
                                    </div>
                    
                                    <div className="grid-x msgsearch friendlist">
                                        <div className="friendphoto">
                                            <div className="statusindicator"></div>
                                        </div>

                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Yogesh Rajmane</h3>
                                                <h4 className="online">Online</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-x msgsearch friendlist f2">
                                        <div className="friendphoto ">
                                            <div className="statusindicator "></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Sunil Shinde</h3>
                                                <h4 className="online">Online</h4>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid-x msgsearch friendlist f3">
                                        <div className="friendphoto ">
                                            <div className="statusindicator "></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Sunil Shinde</h3>
                                                <h4 className="online">Online</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid-x msgsearch friendlist f4">
                                        <div className="friendphoto ">
                                            <div className="statusindicator s4"></div>
                                        </div>
                                        
                                        <div className="grid-x">
                                            <div className="cell large-24 medium-24 small-24 onlinestatus">
                                                <h3>Rahul Shinde</h3>
                                                <h4 className="online">offline</h4>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
   
                        </Link>
                        </li>

           {/* /////////////message menu coding end///////////////////////////////////////////////////////                  */}
                    </ul>
           {/* /////////////////shopping cart Notification menu and message coding end for small and medium screen///////////          */}
                </div>

{/* //////////////////////Header rightside profile image for small and medium screen start////////////// */}
                <div className="cell small-4 medium-4 ">
                    <li ><Link to="#">
                        <div className="dropdown-rightprofilepic ">
                            <div className="profileImage">
                            <div className="profileImageblinking " style={{marginTop:'13px'}}></div>
                                <div className="prof"></div>
                                </div>                                
                            <div className="dropdown-content">    
                            <Link to="#"><i className="fas fa-user-circle profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Edit Profile</span>
                                          
                                </Link>
                                <Link to="#"><i className="fas fa-envelope profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Inbox</span>
 
                                </Link>
                                <Link to="#" className="thirdLine"><i className="fas fa-lock profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Lock Screen</span>
                                            
                                </Link>
                                <Link to="#"><i className="fas fa-cog profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Setting</span>
                                            
                                </Link>

                                <Link to="#"><i class="fas fa-sign-out-alt profilelogo p1"></i>
                                                    <span className="profilelogotext p1">Logout</span> 
                                            
                                </Link>                            
                            </div>
                        </div>
                    </Link></li>
                </div>
     {/* //////////Header right profile image coding for small and medium  end////////////////////////////////////////////////////////////////////////            */}
            </div>  
        </div>
    </div>

{/* ///////////////////////////////////////////////////////////////////////// */}
                
            {/* header for large screen start */}
           
                   <div className="show-for-large" style={{height:'30px'}}>
                         {largemenu}
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
                    <RightSidebar />

                    {/* <div className="card">
                        <p>Lorem Ipsum
                             is simply dummy text of the pri
                             nting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                            s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div> */}
                </div>
                {/* <!--main container end--> */}


        </div>
        )
    }
}
export default UserDashboard;