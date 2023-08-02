const db = require('../models/index.jsx')

// Defining methods for the  Subscription Controller
module.exports = {
  // Get all Subscriptions
  findAll: function (req, res) {
    db.Subscription.find(req.query)
      .sort({ date: -1 })
      .then(subscriptionDb => res.json(subscriptionDb))
      .catch(err => res.status(400).json(err))
  },
  // Find Specific Subscription
  findById: function (req, res) {
    db.Subscription.findById(req.params.id)
      .then(subscriptionDb => res.json(subscriptionDb))
      .catch(err => res.status(400).json(err))
  },
  // Create new subscription for user
  create: function (req, res) {
    db.Subscription.create(req.body)
      .then(subscriptionDb => res.json(subscriptionDb))
      .catch(err => res.status(400).json(err))
  },
  // Update existing subscription for user
  update: function (req, res) {
    db.Subscription.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(subscriptionDb => res.json(subscriptionDb))
      .catch(err => res.status(400).json(err))
  },
  // Delete User
  remove: function (req, res) {
    db.Subscription.findById({ _id: req.params.id })
      .then(subscriptionDb => subscriptionDb.remove())
      .then(cartDb => res.json(cartDb))
      .catch(err => res.status(400).json(err))
  }
}
