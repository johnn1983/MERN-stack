import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  message: '',
}

export const Footer = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  return (
    <div>
      <div id='contact'>
        <div className='container' style={{ minWidth: '100%' }}>
          <div className='row'>
            <div className='col-md-2'>
              <div className='row'>
                <div className='section-title'>
                  <img id="FD-logo" src="../img/fdlogo.png" alt="FD-logo" />
                </div>
              </div>
            </div>
            <div className='col-md-2 contact-info'>
              {/* <div className='contact-item'>
                <h3>Quick links</h3>
                <Link to='/account_detail'><p>Account Details</p></Link>
              </div> */}
              {/* <div className='contact-item'>
                <p>
                  Membership Benefits
                </p>
              </div>
              <div className='contact-item'>
                <p>
                CCW Permit Process
                </p>
              </div>
              <div className='contact-item'>
                <p>
                Reciprocity Map & Gun Laws
                </p>
              </div>
              <div className='contact-item'>
                <p>
                Upcoming Fairline Defense Events
                </p>
              </div> */}
            </div>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <div className='contact-item2'>
                <h3>Support</h3>
                <p style={{ color: '#FFD600' }}>1-888-XXX-XXX</p>
              </div>
              {/* <div className='contact-item2'>
                <p>
                  Email or Chat Us
                </p>
              </div>
              <div className='contact-item2'>
                <p>
                FAQS and Questions
                </p>
              </div> */}
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='text-center'>
        </div>
      </div>
    </div>

  )
}
