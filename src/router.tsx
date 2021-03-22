import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

enum Routes {
  DASHBOARD = "/dashboard",
  TRANSACTIONS = "/transactions",
}

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={Routes.DASHBOARD}
          component={() => <div> Dashboard</div>}
        />
        <Route
          exact
          path={Routes.TRANSACTIONS}
          component={() => <div> Transactions</div>}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
