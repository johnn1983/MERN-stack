const router = require('express').Router()
const userRoutes = require('./user.jsx')
const subscriptionRoutes = require('./subscription.jsx')

router.use('/user', userRoutes)
router.use('/subscription', subscriptionRoutes)

module.exports = router
