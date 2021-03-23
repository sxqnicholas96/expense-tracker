import React from "react"
import { Table } from "antd"
import { ColumnsType } from "antd/es/table"

import store from "src/store"
import { Transaction } from "src/types"

import styles from "./style.module.css"

const columns: ColumnsType<Transaction> = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date: Date) => <span>{date.toDateString()}</span>,
  },
  {
    title: "Nett Transaction Amount",
    dataIndex: "transactionAmount",
    key: "transactionAmount",
    render: (amount: number) => {
      const className = amount >= 0 ? styles.depositStyle : styles.withdrawStyle

      return <span className={className}>{amount}</span>
    },
  },
]

const Transactions: React.FC = () => {
  const transactionData = store.get("transactions")
  const balance = store.get("balance")

  return (
    <div className={styles.container}>
      <h1>Your Balance : ${balance} SGD</h1>
      <div className={styles.tableContainer}>
        <Table columns={columns} dataSource={transactionData}></Table>
      </div>
    </div>
  )
}

export default Transactions
