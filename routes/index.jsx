const router = require('express').Router()
const apiRoutes = require('./api/index.jsx')
const userRoutes = require('./api/user.jsx')
const subscriptionRoutes = require('./api/subscription.jsx')
const authRoutes = require('./api/auth.jsx');
// API Routes
router.use('/api', apiRoutes)
router.use('/api/auth', authRoutes);
router.use('/api/user', userRoutes)
router.use('/api/subscription', subscriptionRoutes)
module.exports = router
