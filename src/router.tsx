import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import MenuTop from "src/components/MenuTop"
import Transactions from "src/components/Transactions"
import Dashboard from "./components/Dashboard"

export enum Routes {
  DASHBOARD = "/dashboard",
  TRANSACTIONS = "/transactions",
}

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <MenuTop />
      <Switch>
        <Route exact path={Routes.DASHBOARD} component={Dashboard} />
        <Route exact path={Routes.TRANSACTIONS} component={Transactions} />
        <Route exact path="/*">
          <Redirect to={Routes.DASHBOARD} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
