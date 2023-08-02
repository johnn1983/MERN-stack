import React from 'react'
import chargebeeCustomer from '../../utils/Chargebee/CustomerAPI'

const CustomerFunctions = () => {
  const {
    createCustomer,
    getCustomers,
    getSingleCustomer,
    updateCustomerInfo,
    updateBillingInfo,
    updatePaymentInfo,
    collectPayment
  } = chargebeeCustomer

  // CREATE A NEW CUSTOMER WITH CHARGEBEE API
  const newCustomer = async data => {
    await createCustomer(data).then(result => {
      console.log(result)
    })
  }

  // RETREIVE A LIST OF ALL CUSTOMERS
  const getAllCustomers = async data => {
    await getCustomers(data).then(result => {
      console.log(result)
    })
  }

  // RETRIEVE A SINGLE CUSTOMER BASED ON THEIR CHARGEBEE ID
  const getCustomerById = async data => {
    await getSingleCustomer(data).then(result => {
      console.log(result)
    })
  }

  // UPDATE CUSTOMER INFORMATION (NON-BILLING, NON-PAYMENT)
  const updateCustomer = async data => {
    await updateCustomerInfo.then(result => {
      console.log(result)
    })
  }
  // UPDATE CUSTOMER BILLING INFORMATION (NOT CARD NUMBER)
  const updateBilling = async data => {
    await updateBillingInfo.then(result => {
      console.log(result)
    })
  }
  // UPDATE CUSTOMER PAYMENT INFORMATION
  const updatePayment = async data => {
    await updatePaymentInfo.then(result => {
      console.log(result)
    })
  }

  // MANUALLY CHARGE A CUSTOMER
  const chargeCustomer = async data => [
    await collectPayment.then(result => {
      console.log(result)
    })
  ]
  return <h1>TEST</h1>
}
export default CustomerFunctions
