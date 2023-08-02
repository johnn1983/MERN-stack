import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      showAble: false
    }
  }

  showPanel () {
    this.setState({
      showAble: !this.state.showAble
    });
  }
  render() {
    return (
      <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Personal Info">
            <div className='billing-area'>
              <h1>Account</h1>
              <div className='view-card-area'>
                <div>
                  <h3>Member</h3>
                  <p>Colt Seman</p>
                  <h3>Membership Number</h3>
                  <p>#000000001</p>
                  <a>EDIT MEMBERS</a>
                  <h3>Auto Renew</h3>
                  <p>October 12, 2022</p>
                  <h3>Credit Card Billed for Membership</h3>
                  <p>American Express editing 1004</p>
                  <a>UPDATE CARD</a>
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
                <h3>Cancelation</h3>
                <p>Your Active Membership Monthly (Yearly)</p>
                <p>You current subscription term ends on <b>10/12/2022</b>. If you proceed with cancelation it will be effective immediately, and not other <b>10/12/2022</b>. Please call 877-766-1919 to review your account options with one of our Customer Engagement Advisors.</p>
                <p>Reason You Are Canceling*</p>
                <textarea rows="3" style={{width: '60%'}}></textarea>
                <p>By canceling your memebership, your benefits and lifesaving training will no longer be available. If you wish to discuss other options, please call XXX-XXX-XXXX or email<b>SUPPORT@Fairline.com to discuss your account options.</b></p>
                <p>If you wish to processd with canceling your account please check the box below stairing you wish to cancel your account.</p>
                <div 
                  style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'start', 
                    flexDirection: 'row'
                    }}>
                  <p>I wish to cancel my Fairline Defence Ccount now*</p>
                  <input 
                    type="checkbox"
                    style={{
                      marginLeft: '10px',
                      marginTop: '-3px'
                    }}/>
                </div>
                <p>
                  Type First and Last Name Here to Confirm * 
                </p>
                <textarea rows="3" style={{width: '60%'}}></textarea>
                <div
                  style={{
                  marginTop: '25px'
                  }}
                >
                  <Link to=''>SUBMIT</Link>
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
      
    );
  }
}

export default Account;