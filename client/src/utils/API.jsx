import axios from 'axios'
require('dotenv').config()
export const BASE_URL = "http://localhost:3001/api"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createUser: function (data) {
    return axios.post('/api/user', data)
  },
  createSubscription: function (data) {
    return axios.post('/api/subscriptions', data)
  },
  getUsers: function () {
    return axios.get('/api/user')
  },
  getSingleUser: function (id) {
    return axios.get(`/api/user/${id}`)
  },
  createCustomer: function (data) {
    return axios.post(
      'https://fairlinedefense-test.chargebee.com/api/v2/customers'
    )
  }
}
