const router = require('express').Router()
const SubscriptionController = require('../../controllers/subscriptionController.jsx')

// Matches with "/api/subscription"
router
  .route('/')
  .get(SubscriptionController.findAll)
  .post(SubscriptionController.create)

// Matches with "/api/subscription/:id"
router
  .route('/:id')
  .get(SubscriptionController.findById)
  .put(SubscriptionController.update)
  .delete(SubscriptionController.remove)

module.exports = router
