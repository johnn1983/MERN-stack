import React, {useState} from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import './index.css'
import Membership from './Component/Membership';
import Account from './Component/Account';
import Benefit from './Component/Benefit';
import Feed from './Component/Feed';
import {Footer} from '../components/footer';
import Hamburger from 'hamburger-react';
import $ from 'jquery';
import {useSelector} from 'react-redux';

const Dashboard =(props) => {
  const {user} = useSelector(state => state.auth);
  console.log(user);
  const username = user.fname;
  $('.nav-item button').click(function () {
    $('.refair-section, .banner').css({
      display: 'none'
    });
  });
  return (
    <div>
      <Hamburger size={20}/>
      <div className='body-content'>
        <div className='container' style={{position: 'relative'}}>
          <Tabs
            defaultActiveKey=""
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Membership">
              <Membership/>
            </Tab>
            <Tab eventKey="account" title="Account">
              <Account />
            </Tab>
            <Tab eventKey="benefits" title="Benefits">
              <Benefit/>
            </Tab>
            <Tab eventKey="feed" title="Feed">
              <Feed/>
            </Tab>
          </Tabs>
          <div className='logo-area'>
            <img id="FD-logo" src="../img/fdlogo.png" alt="FD-logo" />
          </div>
          <div className='banner'>
            <div>
              <h1>Hi,{ username }</h1> 
              <p>#000000</p>
              <div>
                <button className='btn mebership-btn'>Membership Card</button>
              </div>
              <div>
                <button className='btn add-btn'>Add a Spouse</button>
              </div>
              <div>
                <button className='btn emergency-btn'>Emergency Help</button>
              </div>
            </div>
            <div className='detail-info'>
              <h1>201 Days</h1>
              <h3 className='title mt-3'>Auto Renew</h3>
              <p>October 12, 2022</p>
              <h3 className='title'>Questions</h3>
              <p>Call +1877 ******</p>
            </div>
          </div>
        </div>
      </div>
      <div className='refair-section mt-5'>
        <div>
          <h1><b>Fairline defense <br/>is awesome</b></h1>
          <h1>Refer a Friend and make $20</h1>
          <button className='btn refer-btn'>
            Refer a Friend
          </button>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
