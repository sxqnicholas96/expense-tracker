import React from "react"

import styles from "./style.module.css"

const MenuTop: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>Expense Tracker </h2>
      </div>
    </div>
  )
}

export default MenuTop
