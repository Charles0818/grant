import React, { Suspense, lazy } from "react"
import { Router, Switch, Route, BrowserRouter } from "react-router-dom"
import { history } from "../history"
import { LoadingSpinner } from "../components";
import { AppRoute } from "../Router"
import Error404 from "../views/pages/misc/error/404"
// import { Login } from './Auth';
import Grants from "./Grants";
import GrantInfo from './GrantInfo';
import ApplicationForm from './Form';
const Pages = () => {
  return (
  <Router history={history}>
    <Suspense fallback={<LoadingSpinner />}>
    <Switch>
      {/* <AppRoute path="/login" component={Login} fullLayout /> */}
      <AppRoute exact path="/" component={Grants} />
      <AppRoute path="/apply" component={ApplicationForm} />
      <AppRoute path="/grant/:id" component={GrantInfo} />
      <AppRoute component={Error404} fullLayout />
    </Switch>
  </Suspense>
  </Router>
  )
}
export default Pages;
