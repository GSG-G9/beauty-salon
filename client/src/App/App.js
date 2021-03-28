import React from 'react';

import {HOME_PAGE,BLOGS,SIGNIN_PAGE,SIGNUP_PAGE,PROFILE,CONTACTS,BOOK,SERVICES,DASHBOARD,DASHBOARD_APPOINTMENT} from '../utils/router.constant'

import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";

const App = ()=>{
  return (
    <Router>
      <Switch>
      <div>hi</div>
      <Route exact path={HOME_PAGE}></Route>
      <Route  path={BLOGS}></Route>
      <Route  path={SIGNIN_PAGE}></Route>
      <Route  path={SIGNUP_PAGE}></Route>
      <Route  path={PROFILE}></Route>
      <Route  path={CONTACTS}></Route>
      <Route  path={BOOK}></Route>
      <Route  path={SERVICES}></Route>
      <Route  path={DASHBOARD}></Route>
      <Route  path={DASHBOARD_APPOINTMENT}></Route>
      </Switch>
    </Router>
  )
}


export default App;
