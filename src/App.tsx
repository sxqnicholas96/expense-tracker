import React from "react"

import AppRouter from "src/router"
import MenuTop from "src/components/MenuTop"

import "./App.css"

function App() {
  return (
    <div className="App">
      <MenuTop />
      <div className="Body">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
