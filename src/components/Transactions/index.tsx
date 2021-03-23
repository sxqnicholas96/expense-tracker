import React, { useState } from "react"
import { Button, Table, Modal } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
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
  const [isModalVisible, setIsModalVisible] = useState(false)
  const transactionData = store.get("transactions")
  const balance = store.get("balance")

  const showModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Your Balance : ${balance} SGD</h1>
        <Modal
          title="Add Transaction"
          visible={isModalVisible}
          onOk={closeModal}
          onCancel={closeModal}
        ></Modal>
        <Button onClick={showModal}>
          Add Transaction <PlusCircleOutlined />
        </Button>
      </div>
      <div className={styles.tableContainer}>
        <Table columns={columns} dataSource={transactionData}></Table>
      </div>
    </div>
  )
}

export default Transactions
