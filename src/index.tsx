import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import store, { defaultTransactionsArray } from "./store" // Initialise store
import "antd/dist/antd.css"
import "./index.css"

store.defaults({ balance: 10000, transactions: defaultTransactionsArray }) // Default values

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
