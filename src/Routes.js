import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreatePost from './components/posts/CreatePost';
import Dashboard from './components/Dashboard';
import { history } from './history'
import Profile from './components/users/Profile';
import ForgotPassword from './components/users/ForgotPassword.js';
import ResetPassword from './components/users/ResetPassword';
import PostDetails from './components/posts/PostDetails'
import AuthPosts from './components/posts/AuthPosts'
import ParentComponent from './components/screens/Playground.js'

import SingleList from './components/screens/SingleList.js'
import DoubleList from './components/screens/DoubleList.js'
import SingleImplement from './components/screens/SingleImplement.js'
import SingleInterview1 from './components/screens/SingleInterview1.js'
import SingleInterview2 from './components/screens/SingleInterview2.js'
import SingleInterview3 from './components/screens/SingleInterview3.js'
import SingleInterview4 from './components/screens/SingleInterview4.js'

import FuncvsComp from './components/screens/FuncvsComp.js'
import Props from './components/screens/props.js'

//import App from './components/screens/App.js'


const Routes  = () => {
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Register} />
            <Route path='/createpost' component={CreatePost} />
            <Route path='/profile/:id' component={Profile} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <Route path='/resetpassword/:token' component={ResetPassword} />
            <Route path='/posts/:id' component={PostDetails} />
            <Route path='/authposts' component={AuthPosts} />
            <Route path='/learn' component={ParentComponent}/>
            <Route path='/playground' component ={ParentComponent}/>
            

            <Route path='/singlylist' component = {SingleList}/>
            <Route path='/doublylist' component = {DoubleList}/>
            <Route path='/singleimplement' component = {SingleImplement}/>
            <Route path='/singleinterview1' component = {SingleInterview1}/>
            <Route path='/singleinterview2' component = {SingleInterview2}/>
            <Route path='/singleinterview3' component = {SingleInterview3}/>
            <Route path='/singleinterview4' component = {SingleInterview4}/>
            
            <Route path='/funcvscomp' component = {FuncvsComp}/>
            <Route path='/props' component = {Props}/>

          </Switch>
        </div>
      </Router>
    );
}

export default Routes;

