import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'
import {BASE_URL} from '../utils/API';
// Register User
export const registerUser = (userData, history) => dispatch => {
  console.log(process.env.LARAVEL_API_ENDPOINT);
  axios
    .post(BASE_URL + '/auth/register', userData)
    .then(res => history('/login')) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
// Login - get user token
export const loginUser = (userData, history) => dispatch => {
  axios
    .post(BASE_URL + '/auth/login', userData)
    .then(res => {
      // Save to localStorage
      console.log(res.data);
      const { accessToken } = res.data;
      localStorage.setItem('jwtToken', accessToken)
      setAuthToken(accessToken)
      dispatch(setCurrentUser(res.data.user));
      history('/dashboard')
    })
    .catch(err =>{
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
      
    )
}

export const getCurrentUser = () => dispatch => {
  axios
    .get(BASE_URL + '/user/profile')
    .then(res => {
      dispatch(setCurrentUser(res.data));
    })
    .catch(err =>{
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    });
}
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  }
}
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}
