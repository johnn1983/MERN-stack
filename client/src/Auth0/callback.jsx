import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import auth0Client from './connect'
import Home from '../Home'

const Callback = () => {
  let navigate = useNavigate()
  useEffect(() => {
    auth0Client.handleAuthentication()
    navigate('/', { replace: true })
  }, [navigate])
  return <Home />
}

export default Callback
