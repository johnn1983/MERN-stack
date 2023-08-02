import React from 'react'
import chargebeeSubscription from '../../utils/Chargebee/SubscriptionAPI'

const SubscriptionFunctions = () => {
  const {
    createSubscription,
    retrieveSubscription,
    updateSubscription,
    pauseSubscription,
    reactivateSubscription,
    deleteSubscription
  } = chargebeeSubscription

  // CREATE A NEW SUBSCRIPTION
  const newSubscription = async data => {
    await createSubscription.then(result => {
      console.log(result)
    })
  }
  // RETRIEVE USER SUBSCRIPTION
  const getSubscription = async data => {
    await retrieveSubscription.then(result => {
      console.log(result)
    })
  }
  // UPDATE USER SUBSCRIPTION
  const updateUserSubscription = async data => {
    await updateSubscription.then(result => {
      console.log(result)
    })
  }
  // PAUSE USER SUBSCRIPTION
  const pauseUserSubscription = async data => {
    await pauseSubscription.then(result => {
      console.log(result)
    })
  }

  // REACTIVATE USER SUBSCRIPTION
  const reactivateUserSubscription = async data => {
    await reactivateSubscription.then(result => {
      console.log(result)
    })
  }
  // DELETE USER SUBSCRIPTION
  const deleteUserSubscription = async data => {
    await deleteSubscription.then(result => {
      console.log(result)
    })
  }

  return <h1>TEST</h1>
}
export default SubscriptionFunctions
