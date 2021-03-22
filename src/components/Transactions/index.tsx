import React from "react"
import { Table } from "antd"

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: "Nett Transaction Amount",
    dataIndex: "transactionAmount",
    key: "transactionAmount",
    render: (amount: number) => <span>{amount}</span>,
  },
]

const Transactions: React.FC = () => {
  return <Table columns={columns}></Table>
}

export default Transactions
