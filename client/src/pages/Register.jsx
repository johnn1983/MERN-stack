import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/register.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
require('dotenv').config()

const Register = () => {
  //New User data object
  const [newUser, setNewUser] = useState({
    clientId: 'GcBaOHR6zUhQgVF6haTeLppgRhpcwJ2L',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  //Navigation Hook
  const { navigate } = useNavigate()

  // Function for registering new users using Auth0 authentication
  const signUp = async data => {
    await API.createCustomer(data).then(
      navigate('/dashboard', { replace: true })
    )
    console.log(data, 'data')
  }
  // Destructed newUser object
  const { firstName, lastName, email, password, phone } = newUser
  return (
    <div className='register-container'>
      <div className='register-form'>
        <form>
          <div className='brand'>
            <img
              id='FD-registerlogo'
              src='../img/fdlogo.png'
              alt='Fairline Defense Registration'
            />
            <h1 className='text-center register-title'>Register</h1>
          </div>
          <div className='row form-content'>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='fname'
                  placeholder='First Name'
                  value={firstName}
                  onChange={e =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Email'
                  value={email}
                  onChange={e =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='pwd'
                  placeholder='Create Password'
                  value={password}
                  onChange={e =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='lname'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={e =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
              </div>
              <div className='form-group phone-group'>
                <input
                  type='text'
                  className='form-control'
                  id='pcountry'
                  placeholder='+1'
                />
                <input
                  type='text'
                  className='form-control'
                  id='pnum'
                  placeholder='Phone'
                  value={phone}
                  onChange={e =>
                    setNewUser({ ...newUser, phone: e.target.value })
                  }
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='cpwd'
                  placeholder='Repeat Password'
                />
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>
          <div>
            <p className='special-item1'>
              Min 8 char, with at least upper case letter <br />
              one number, and one special char.:!, @, $, #, &, *.
            </p>
            <p className='text-center special-item service'>
              By clicking "create account" you agree <br /> to our{' '}
              <Link to=''>Terms & Service</Link>
            </p>
          </div>
          <div className='register-btn-area'>
            <button className='register-btn' onClick={() => signUp(newUser)}>
              Create Account
            </button>
          </div>
          <div>
            <p className='login-check'>
              Already have an account?
              <Link to='/login' className='login-link'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
