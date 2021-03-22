import React from "react"
import { Link } from "react-router-dom"

import { Routes } from "src/router"

import styles from "./style.module.css"

const MenuTop: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Expense Tracker </h2>
      </div>
      <div className={styles.linkListContainer}>
        <Link to={Routes.DASHBOARD}> Dashboard</Link>
        <Link to={Routes.TRANSACTIONS}> Transactions</Link>
      </div>
    </div>
  )
}

export default MenuTop
