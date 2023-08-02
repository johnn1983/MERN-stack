import React from "react";
import '../../assets/plan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Hamburger from 'hamburger-react';
import Card from 'react-bootstrap/Card';

class Plan extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'Select your plan!',
      subTitle: 'List all the points user getting with this plan',
      visible: false
    }
  }
   
  onHandleFunc() {
    this.setState({
      title: 'Congratulations!',
      subTitle: 'Your account has been successfully created',
      visible: true
    });
  }

  render() {


    return (
      <div className="home-container">
        <Hamburger size={20} />
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-svg"/>
        <img id="FD-logo" src="../img/fdlogo.png" alt="FD-logo" />
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="login-form">
              <form>
                <div className="brand">
                  <h3 className="text-center plan"><b>{this.state.title}</b></h3>
                </div>
                <div className="getting-points">
                  <p className="text-center sucessfully">{this.state.subTitle}</p>
                </div>
                <div className="row mt-5">
                  {
                    this.state.visible == true ?
                      <p className="text-center"
                        style={{
                          fontSize: '20px',
                          fontWeight: 600,
                          color: '#fff'
                        }}>Start your Protection</p>: '' 
                  }
                  <div className="col-md-6">
                    <Card className="text-center card-border plan-card" 
                      onClick={this.onHandleFunc.bind(this)} 
                      style={{ 
                        boder:'1px solid white',
                        marginTop: '10px'
                      }}
                      >
                      <Card.Body>
                        <Card.Title className="card-price">$19</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Per month</Card.Subtitle>
                        <Card.Text className="card-text bill-text text-center">
                          Billed monthly
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-6">
                    <Card className="text-center card-border plan-card" 
                      onClick={this.onHandleFunc.bind(this)}  
                      style={{
                        border:'1px solid white',
                        marginTop: '10px'
                      }}
                      >
                      <Card.Body>
                        <Card.Title className="card-price">$199</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Per Year</Card.Subtitle>
                        <Card.Text className="card-text bill-text text-center">
                          Billed monthly
                        </Card.Text>
                        <Card.Text className="card-text save-text text-center">
                          Over $40 Savings
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                {
                  this.state.visible == true ?
                  <div>
                    <p className="text-center"
                      style={{
                        color: '#fff',
                        marginTop: '20px',   
                        fontSize: '20px',                     
                      }}>You are one step away from getting the protection you need</p>
                    <p className="text-center"
                      style={{
                        color: '#fff',
                        marginTop: '10px'
                      }}>
                      Only for 19.99/month or $199/Yr($40 savings)
                    </p>
                  </div>: '' 
                    
                }
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}

export default Plan;
