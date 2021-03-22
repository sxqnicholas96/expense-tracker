import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

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
        <Route exact path="/*">
          <Redirect to={Routes.DASHBOARD} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter