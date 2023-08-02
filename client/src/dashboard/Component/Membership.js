import React, {useState} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux';
const invoices = [
  {
    id: 1,
    date: '2/12/2022',
    charge: '$19.99'
  },
  {
    id: 2,
    date: '3/12/2022',
    charge: '$19.99'
  },
  {
    id: 3,
    date: '4/12/2022',
    charge: '$19.99'
  },
  {
    id: 4,
    date: '5/12/2022',
    charge: '$19.99'
  },
  {
    id: 5,
    date: '6/12/2022',
    charge: '$19.99'
  }
]
const Membership = (props) => {
  const [showAble, setShowAble] = useState(false);
  
  const {user} = useSelector(state => state.auth);
  // console.log(user);
  const showPanel =  () => {
    setShowAble(!showAble);
  }
    return (
      <div className='membership-area'>
        <h1>Membership</h1>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Personal Info">
            <div className='personal-info'>
              <div>
                <h3>Full Name</h3>
                <p>{user.fname}&nbsp; {user.lname}</p>
                <h3>Email</h3>
                <p>{user.email}</p>
                <h3>Phone</h3>
                <p>{user.phone}</p>
                <h3>Shipping Address</h3>
                <p>Los Angeles, USA</p>
              </div>
              <div>
                <button className='btn edit-btn'>Edit Profile</button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="billing" title="Membership & Billing">
            {showAble == true ? 
              <div className='billing-area'>
                <div className='view-card-area'>
                  <div>
                    <h3>Member</h3>
                    <p>Colt Seman</p>
                    <h3>Membership Number</h3>
                    <p>#000000001</p>
                    <Link to='' onClick={showPanel}>EDIT MEMBERS</Link>
                    <h3>Auto Renew</h3>
                    <p>October 12, 2022</p>
                    <h3>Credit Card Billed for Membership</h3>
                    <p>American Express editing 1004</p>
                    <Link to=''>UPDATE CARD</Link>
                  </div>
                  <div>
                    <div>
                      <button className='btn btn-default card-btn'>View Card</button>
                    </div>
                    <div className='member-btn-area'>
                      <button className='btn member-btn'>Add a Member</button>
                      <p>For an extra $4.99/Mo</p>
                    </div>
                  </div>
                </div>
                <hr className='billing-hr'/>
                <div>
                  <h3>Membership Documents</h3>
                  <p>Fairline MEMBERSHIP AGREEMENT AND SELF-DEFENSE LIABILITY POLICY</p>
                  <Link to=''>VIEW DOCUMENTS</Link>
                </div>
                <hr className='billing-hr'/>
                <div>
                  <h3>Cancellation</h3>
                  <p>Active Membership Monthly</p>
                  <Link to=''>CANCEL MEMBERSHIP</Link>
                </div>
              </div>: 
              <div className='email-preference'>
                <div className='row'>
                  <div className='col-md-8'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <p>First Name</p>
                        <input type="text" className="form-control" placeholder="Ausl"/>
                      </div>
                      <div className='col-md-6'>
                        <p>Last Name</p>
                        <input type="text" className="form-control" placeholder="Semon"/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <p>Email</p>
                        <input type="email" className="form-control" placeholder="ausl@businessmail.com"/>
                      </div>
                      <div className='col-md-6'>
                        <p>Phone</p>
                        <input type="text" className="form-control" placeholder="612-840-123"/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <p>Street Address</p>
                        <input type="text" className="form-control" placeholder="724N Texas"/>
                      </div>
                      <div className='col-md-6'>
                        <p>City, Zip Code</p>
                        <input type="text" className="form-control" placeholder="Los Angeles 90046"/>
                      </div>
                    </div> 
                    <div className='row'>
                      <div className='col-md-6'>
                        <p>New Password</p>
                        <input type="password" className="form-control" placeholder="*********"/>
                        <FontAwesomeIcon icon={faEye} className='password-eye'/>
                      </div>
                      <div className='col-md-6'>
                        <p>Renew Password</p>
                        <input type="password" className="form-control" placeholder="********"/>
                      </div>
                    </div>
                    <div className='btn-area'>
                      <button className='btn btn-default cancel-btn'>Cancel</button>
                      <button className='btn btn-info save-edit-btn' onClick={showPanel}>Save Edits</button>
                    </div>   
                  </div>
                </div>
              </div>
            }
          </Tab>
          <Tab eventKey="invoice" title="Invoices">
            <div className='invoice-area'>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Invoice Date</th>
                    <th>Charge</th>
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(invoice => (
                    <tr key={invoice.id}>
                      <td>{invoice.date}</td>
                      <td>{invoice.charge}</td>
                      <td><a>VIEW PDF</a></td>
                    </tr>
                  )) }
                </tbody>
              </table>
              <div>
                <h4>Past Years</h4>
                <div>
                  <Link to=''>2021</Link>
                </div>
                <div>
                  <Link to=''>2020</Link>
                </div>
                <div>
                  <Link to=''>2019</Link>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="email" title="Email Preferences">
            <div className='member-preference'>
              <h3>Member</h3>
              <p>Colt Seman</p>
              <hr className='billing-hr'/>
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <p>To select your  email preferences or unsubscribe from all publications, please verify your email address above and update your preferences below</p>
                </div>
                <div className='col-md-8 col-sm-12'>
                  <div class="checkbox-area">
                    <div className='check-input'>
                      <input type='checkbox' />
                    </div>
                    <div className='check-label'>
                      <p>Membership & Subscription Reminder</p>
                    </div>
                  </div>
                  <div class="checkbox-area">
                    <div className='check-input'>
                      <input type='checkbox' />
                    </div>
                    <div className='check-label'>
                      <p>Insider Deals & Self-Defense Production</p>
                    </div>
                  </div>
                  <div class="checkbox-area">
                    <div className='check-input'>
                      <input type='checkbox' />
                    </div>
                    <div className='check-label'>
                      <p>News Feed</p>
                    </div>
                  </div>
                  <div class="checkbox-area">
                    <div className='check-input'>
                      <input type='checkbox' />
                    </div>
                    <div className='check-label'>
                      <p>Promotions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
}

export default Membership;