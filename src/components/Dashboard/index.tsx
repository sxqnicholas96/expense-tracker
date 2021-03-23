import React from "react"
import moment from "moment"
import _ from "lodash"
import Chartist from "chartist"
import ChartistGraph from "react-chartist"

import store from "src/store"
import { Transaction } from "src/types"

import styles from "./style.module.css"

const Dashboard: React.FC = () => {
  const transactions = store.get("transactions")

  const data = {
    series: [
      {
        name: "transactions",
        data: _.map(transactions, (t: Transaction) => {
          return { x: new Date(t.date), y: t.transactionAmount }
        }),
      },
    ],
  }

  const options = {
    axisX: {
      type: Chartist.FixedScaleAxis,
      labelInterpolationFnc: function (value: string) {
        return moment(value).format("MMM D")
      },
    },
  }
  return (
    <div className={styles.container}>
      <h1>Trend Visualisation</h1>
      <ChartistGraph data={data} options={options as any} type="Line" />
    </div>
  )
}

export default Dashboard
