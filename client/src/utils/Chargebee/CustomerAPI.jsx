// IMPORT CHARGEBEE LIBRARY
const chargebee = require('chargebee')

// CHARGEBEE CONFIG AND INITIALIZATION
chargebee.configure({
  site: 'fairlinedefense-test',
  api_key: 'test_kPskCeXUHhuXCa0NIVx2JKMwT12NH6Iz'
})

// CREATE A NEW CUSTOMER
const CustomerAPI = {
  createCustomer: function (data) {
    chargebee.customer
      .create({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        card: {
          first_name: data.card.first_name,
          last_name: data.card.last_name,
          number: data.card.cardNumber,
          expiry_month: data.card.expiry_month,
          expiry_year: data.card.expiry_year,
          cvv: data.card.cvv
        }
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let customer = result.customer
          let card = result.card
        }
      })
  },

  // RETRIEVE ALL CUSTOMERS
  getCustomers: function (data) {
    chargebee.customer
      .list({
        'first_name[is]': data.first_name,
        'last_name[is]': data.last_name,
        'email[is]': data.email
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          for (let i = 0; i < result.list.length; i++) {
            let entry = result.list[i]
            console.log(entry)
            let customer = entry.customer
            let card = entry.card
          }
        }
      })
  },

  // RETRIEVE A CUSTOMER BY CHARGEBEE ID
  getSingleCustomer: function (data) {
    chargebee.customer
      .retrieve('__test__KyVnHhSBWlF0Q2dg')
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let customer = result.customer
          let card = result.card
        }
      })
  },
  // UPDATE CUSTOMER INFO
  updateCustomerInfo: function (data) {
    chargebee.customer
      .update('AzZl3aTApbiqe62x', {
        first_name: data.first_name,
        last_name: data.last_name,
        locale: data.locale
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let customer = result.customer
          let card = result.card
        }
      })
  },
  // UPDATE PAYMENT INFO FOR CUSTOMER
  updatePaymentInfo: function (data) {
    chargebee.customer
      .update_payment_method('AzZl3aTApbiqe62x', {
        payment_method: {
          type: 'card',
          gateway_account_id: 'gw___test__KyVnGlSBWl8M41ju',
          reference_id: 'cus_I58QViSiwuelqF'
        }
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let customer = result.customer
          let card = result.card
        }
      })
  },

  // UPDATE BILLING INFO FOR CUSTOMER
  updateBillingInfo: function (data) {
    chargebee.customer
      .update_billing_info('__test__KyVnHhSBWlFY32dl', {
        billing_address: {
          first_name: data.first_name,
          last_name: data.last_name,
          line1: data.address.line1,
          city: data.address.city,
          state: data.address.state,
          zip: data.address.zip,
          country: data.address.country
        }
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let customer = result.customer
          let card = result.card
        }
      })
  },
  // MANUALLY COLLECT A PAYMENT FROM CUSTOMER
  collectPayment: function (data) {
    chargebee.customer
      .collect_payment('AzZl3aTApbiqe62x', {
        amount: 100,
        payment_source_id: data.customer.payment_source_id,
        invoice_allocations: [
          {
            invoice_id: '__demo_inv__1'
          }
        ]
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let customer = result.customer
          let transaction = result.transaction
        }
      })
  }
}
module.exports = CustomerAPI
