import React, { useState } from "react"
import _ from "lodash"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import { Button, Table, Modal, Form, DatePicker, InputNumber } from "antd"
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons"
import { ColumnsType } from "antd/es/table"

import store from "src/store"
import { Transaction } from "src/types"

import styles from "./style.module.css"

interface State {
  transactions: Transaction[]
  balance: number
}

const generateColumns = (removeTransaction: (id: string) => void) => {
  const columns: ColumnsType<Transaction> = [
    {
      title: "Date",
      dataIndex: "date",
      defaultSortOrder: "ascend",
      sorter: (a, b) => {
        return moment(a.date).diff(b.date)
      },
      key: "date",
      render: (date: Date) => <span>{date.toDateString()}</span>,
    },
    {
      title: "Nett Transaction Amount",
      dataIndex: "transactionAmount",
      key: "transactionAmount",
      render: (amount: number) => {
        const className =
          amount >= 0 ? styles.depositStyle : styles.withdrawStyle

        return <span className={className}>{amount}</span>
      },
    },
    {
      width: "50px",
      dataIndex: "id",
      key: "id",
      title: "Actions",
      render: (id: string) => {
        return (
          <DeleteOutlined
            style={{ cursor: "pointer" }}
            onClick={() => removeTransaction(id)}
          />
        )
      },
    },
  ]

  return columns
}

const Transactions: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [state, setState] = useState<State>({
    transactions: store.get("transactions"),
    balance: store.get("balance"),
  })

  const { transactions, balance } = state

  const showModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const addTransaction = ({ date, transactionAmount }: Transaction) => {
    const newBalance = balance + transactionAmount
    const newTransactionsArray = transactions.concat({
      id: uuidv4(),
      date: new Date(date),
      transactionAmount,
    })
    setState({
      transactions: newTransactionsArray,
      balance: newBalance,
    })
    closeModal()
  }

  const removeTransaction = (id: string) => {
    const txn = _.find(transactions, (t) => id === t.id)
    if (!txn) {
      return
    }
    const newTransactionsArray = _.filter(transactions, (t) => txn.id !== t.id)
    const newBalance = balance - txn.transactionAmount
    setState({
      transactions: newTransactionsArray,
      balance: newBalance,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>Your Balance : ${balance} SGD</h1>
        <Modal
          title="Add Transaction"
          visible={isModalVisible}
          onCancel={closeModal}
          footer={null}
        >
          <Form className={styles.formContainer} onFinish={addTransaction}>
            <Form.Item
              className={styles.formField}
              label="Transaction Date"
              name="date"
              rules={[
                { required: true, message: "Please input transaction date!" },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              className={styles.formField}
              label="Transaction Amount"
              name="transactionAmount"
              rules={[
                {
                  required: true,
                  message: "Please input transaction amount!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item className={styles.submitContainer}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitButton}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Button onClick={showModal}>
          Add Transaction <PlusCircleOutlined />
        </Button>
      </div>
      <div className={styles.tableContainer}>
        <Table
          columns={generateColumns(removeTransaction)}
          dataSource={transactions}
        ></Table>
      </div>
    </div>
  )
}

export default Transactions
