// IMPORT CHARGEBEE LIBRARY
const chargebee = require('chargebee')

// CHARGEBEE CONFIG AND INITIALIZATION
chargebee.configure({
  site: 'fairlinedefense-test',
  api_key: 'test_kPskCeXUHhuXCa0NIVx2JKMwT12NH6Iz'
})

const SubscriptionAPI = {
  // CREATE A NEW SUBSCRIPTION
  createSubscription: function (data) {
    chargebee.subscription
      .create_with_items('__test__8asz8Ru9WhHOJO', {
        subscription_items: [
          {
            item_price_id: 'Fairline-Defense-Subscription-USD-Monthly',
            unit_price: 19
          },
          {
            item_price_id: 'Fairline-Defense-Subscription-USD-Yearly',
            unit_price: 220
          }
        ]
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let subscription = result.subscription
          let customer = result.customer
          let card = result.card
          let invoice = result.invoice
          let unbilled_charges = result.unbilled_charges
        }
      })
  },

  // RETREIVE A SUBSCRIPTION
  retrieveSubscription: function (data) {
    chargebee.subscription
      .retrieve('AzZl3aTApc0yV63R')
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let subscription = result.subscription
          let customer = result.customer
          let card = result.card
        }
      })
  },

  // UPDATE A SUBSCRIPTION
  updateSubscription: function (data) {
    chargebee.subscription
      .update_for_items('AzZl3aTApc0yV63R', {
        invoice_immediately: true,
        subscription_items: [
          {
            item_price_id: 'cbdemo_advanced-USD-monthly',
            quantity: 4,
            unit_price: 1000
          }
        ]
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let subscription = result.subscription
          let customer = result.customer
          let card = result.card
          let invoice = result.invoice
          let unbilled_charges = result.unbilled_charges
          let credit_notes = result.credit_notes
        }
      })
  },

  // PAUSE A SUBSCRIPTION
  pauseSubscription: function (data) {
    chargebee.subscription
      .pause('AzZl3aTApc0yV63R', {
        pause_option: 'end_of_term'
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let subscription = result.subscription
          let customer = result.customer
          let card = result.card
          let invoice = result.invoice
          let unbilled_charges = result.unbilled_charges
          let credit_notes = result.credit_notes
        }
      })
  },

  // REACTIVATE A SUBSCRIPTION
  reactivateSubscription: function (data) {
    chargebee.subscription
      .reactivate('cbdemo_cancelled_sub', {
        invoice_immediately: true,
        billing_cycles: 4
      })
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          let subscription = result.subscription
          let customer = result.customer
          let card = result.card
          let invoice = result.invoice
          let unbilled_charges = result.unbilled_charges
        }
      })
  },

  // DELETE A SUBSCRIPTION
  deleteSubscription: function (data) {
    chargebee.subscription
      .delete('AzZl3aTApc0yV63R')
      .request(function (error, result) {
        if (error) {
          //handle error
          console.log(error)
        } else {
          console.log(result)
          var subscription = result.subscription
          var customer = result.customer
          var card = result.card
        }
      })
  }
}

module.exports = SubscriptionAPI
