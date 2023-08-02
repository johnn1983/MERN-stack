const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create SUBSCRIPTION Schema
const subscriptionSchema = new Schema({
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true }
})

const Subscription = mongoose.model('subscription', subscriptionSchema)

module.exports = Subscription
