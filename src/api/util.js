import axios from 'axios'

let util = {}
util.ajax = axios.create({
  baseURL: 'api/',
  timeout: 50000
})

export default util
