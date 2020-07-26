import React, { Component } from 'react';
import './LeftHeaderMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
class LeftHeaderMenu extends Component{ 
    componentDidMount(){
        $(document).ready(function(){
            var i=0;
            $(".dashboard").click(function(){     
                if(i===0)
                {
                    $(".sdashboard").css("display","block")
                    i=i+1
                    // $(".sdashboard").show()
                }
                else{$(".sdashboard").hide()
                    i=i-1}
            });

            $(".widgets").click(function(){     
                if(i===0){i=i+1
                    $(".swidgets").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".swidgets").hide()
                    i=i-1}
            });
            $(".ui-element").click(function(){     
                if(i===0){i=i+1
                    $(".sui-element").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".sui-element").hide()
                    i=i-1}
            });
            $(".base").click(function(){     
                if(i===0){i=i+1
                    $(".sbase").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".sbase").hide()
                    i=i-1}
            });
            $(".icon").click(function(){     
                if(i===0){i=i+1
                    $(".sicon").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".sicon").hide()
                    i=i-1}
            });
            $(".buttons").click(function(){     
                if(i===0){i=i+1
                    $(".sbuttons").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".sbuttons").hide()
                    i=i-1}
            });
            $(".gallary").click(function(){     
                if(i===0){i=i+1
                    $(".sgallary").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".sgallary").hide()
                    i=i-1}
            });
            $(".forms").click(function(){     
                if(i===0){i=i+1
                    $(".sforms").css("display","block")
                    // $(".swidgets").show()
                }
                else{$(".sforms").hide()
                    i=i-1}
            });

        });
    }    
    render(){

    return(
        <div className="LeftHeaderMenu">                

            <div className="grid-x menu dashboard">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Dashboard</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div> 

                <div className="grid-x">
                    <div className="cell">
                        <ul className="sub-menu sdashboard">
                            <li>Default</li>
                            <li>E-Commerce</li>
                            <li>University</li>
                            <li>Crypto</li>
                            <li>Server</li>
                            <li>Project</li>
                        </ul>
                    </div>
                </div>
                
            <div className="grid-x menu widgets">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Widgets</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                <div lassName="grid-x">
                    <div className="cell">
                        <ul className="sub-menu swidgets">
                            <li>General</li>
                            <li>Chart</li>
                        </ul>
                    </div>
                </div>


                <div className="grid-x menu ui-element">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">UI-Elements</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                    <div lassName="grid-x">
                        <div className="cell">
                            <ul className="sub-menu sui-element">
                                <li>Avatars</li>
                                <li>Breadcrumb</li>
                                <li>Grid</li>
                                <li>Helper-classes</li>
                            </ul>
                        </div>
                    </div>
    
            
            <div className="grid-x menu base">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Base</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                    <div lassName="grid-x">
                        <div className="cell">
                            <ul className="sub-menu sbase">
                                <li>Avatars</li>
                                <li>Breadcrumb</li>
                                <li>Grid</li>
                                <li>Helper-classes</li>
                            </ul>
                        </div>
                    </div>
            
            <div className="grid-x menu icon">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Icon</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                    <div lassName="grid-x">
                        <div className="cell">
                            <ul className="sub-menu sicon">
                                <li>Avatars</li>
                                <li>Breadcrumb</li>
                                <li>Grid</li>
                                <li>Helper-classes</li>
                            </ul>
                        </div>
                    </div>

            
            <div className="grid-x menu buttons">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Buttons</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                    <div lassName="grid-x">
                        <div className="cell">
                            <ul className="sub-menu sbuttons">
                                <li>Avatars</li>
                                <li>Breadcrumb</li>
                                <li>Grid</li>
                                <li>Helper-classes</li>
                            </ul>
                        </div>
                    </div>

            <div className="grid-x menu gallary">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Gallary</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                    <div lassName="grid-x">
                        <div className="cell">
                            <ul className="sub-menu sgallary">
                                <li>Avatars</li>
                                <li>Breadcrumb</li>
                                <li>Grid</li>
                                <li>Helper-classes</li>
                            </ul>
                        </div>
                    </div>

            <div className="grid-x menu forms">
                <div className="cell small-2 medium-4 large-2"><FontAwesomeIcon icon={faHome}/></div>
                <div className="cell small-18 medium-16 large-18"><p className="maintext">Forms</p></div>
                <div className="cell small-2 medium-4 large-2 text-right">></div>
            </div>
                    <div lassName="grid-x">
                        <div className="cell">
                            <ul className="sub-menu sforms">
                                <li>Avatars</li>
                                <li>Breadcrumb</li>
                                <li>Grid</li>
                                <li>Helper-classes</li>
                            </ul>
                        </div>
                    </div>

        </div>
    )
}
}
export default LeftHeaderMenu;