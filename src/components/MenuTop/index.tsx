import React from "react"
import { Divider } from "antd"
import { Link } from "react-router-dom"

import { Routes } from "src/router"

import styles from "./style.module.css"

const MenuTop: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Expense Tracker </h2>
      </div>
      <Divider
        type="vertical"
        style={{
          height: "35px",
          borderLeft: "1px solid rgba(0,0,0,0.15",
          marginLeft: "15px",
        }}
      />
      <div className={styles.linkListContainer}>
        <Link to={Routes.DASHBOARD}> Dashboard</Link>
        <Link to={Routes.TRANSACTIONS}> Transactions</Link>
      </div>
    </div>
  )
}

export default MenuTop
