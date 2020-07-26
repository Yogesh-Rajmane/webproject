import React, {Component } from 'react';
import classes from './App.css';
import {Route} from 'react-router-dom';

import UserLogin from '../components/UserLogin/UserLogin';
import UserRegister from '../components/UserLogin/UserRegister/UserRegister';
import UserDashboard from '../components/UserDashboard/UserDashboard';



  class App extends Component {
   state={
       loginPage:true,
       registerPage:false
   }
 
  render() {
    return (
      <div className={classes.App}>
        
          {/* <Link to="/"></Link> */}
          {/* <Link to="/UserRegister"> UserRegister </Link> */}
          {/* <Link to="/userDashboard">UserDashboard</Link> */}
          {/* <Link to="/rightSidebar">UserDashboard</Link> */}
          
          <Route path="/" component={UserLogin} exact/> 
          <Route path="/UserRegister" component={UserRegister}/>
          <Route path="/UserDashboard" component={UserDashboard}/>
      
          {/* <UserLogin /> */}
          {/* <UserRegister /> */}
          {/* <UserDashboard /> */}
      </div>  
    )
  }
}
export default App;