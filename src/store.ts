import { Transaction } from "./types"

const storeEngine = require("store/src/store-engine")
const storages = [require("store/storages/localStorage")]
const plugins = [require("store/plugins/defaults")]
const localStore = storeEngine.createStore(storages, plugins)

export const defaultTransactionsArray: Transaction[] = [
  {
    date: new Date("2020-10-05"),
    transactionAmount: 500,
  },
  {
    date: new Date("2020-10-05"),
    transactionAmount: -100,
  },
  {
    date: new Date("2020-11-05"),
    transactionAmount: 500,
  },
  {
    date: new Date("2020-12-05"),
    transactionAmount: 500,
  },
]

export default localStore
