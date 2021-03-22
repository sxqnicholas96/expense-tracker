import React from "react"
import { Table } from "antd"

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Nett Transaction Amount",
    dataIndex: "transactionAmount",
    key: "transactionAmount",
    render: (amount: number) => <a>{amount}</a>,
  },
]

const Transactions: React.FC = () => {
  return <Table columns={columns}></Table>
}

export default Transactions
