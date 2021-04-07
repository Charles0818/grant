import React, { Suspense, lazy } from "react"
import { Router, Switch, Route, BrowserRouter } from "react-router-dom"
import { history } from "../history"
import { LoadingSpinner } from "../components";
import { AppRoute } from "../Router"
import Error404 from "../views/pages/misc/error/404"
// import { Login } from './Auth';
import FinancialInstitutions from "./FinancialInstitutions";
import GrandInfo from './GrandInfo';
import ApplicationForm from './Form';
const Pages = () => {
  return (
  <Router history={history}>
    <Suspense fallback={<LoadingSpinner />}>
    <Switch>
      {/* <AppRoute path="/login" component={Login} fullLayout /> */}
      <AppRoute exact path="/" component={FinancialInstitutions} />
      <AppRoute path="/apply" component={ApplicationForm} />
      <AppRoute path="/grant/:id" component={GrandInfo} />
      <AppRoute component={Error404} fullLayout />
    </Switch>
  </Suspense>
  </Router>
  )
}
export default Pages;
