import { Component} from "react";
import { Link } from "react-router-dom";


export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBackground: ''
    }
    
    this.changeBackground = this.changeBackground.bind(this);
  }

  changeBackground () {
    if(window.scrollY > 1) {
      this.setState({navBackground: '#21488A'});
    }else if(window.scrollY < 1) {
      this.setState({navBackground: ''});
    }
    console.log(window.scrollY);
  }

  componentDidMount () {
    window.addEventListener("scroll", this.changeBackground.bind(this))
    
  }
  
  render () {

    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top' style={{background:this.state.navBackground}}>
        <div className=''>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
            <img id="FDHead-logo" src="../img/fdlogo.png" alt="FD-logo" />
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#cover' className='page-scroll'>
                  How it works
                </a>
              </li>
              <li>
                <a href='#income' className='page-scroll'>
                  Coverages
                </a>
              </li>
              <li>
                <a href='#terminal' className='page-scroll'>
                  Testimonials
                </a>
              </li>
              <li>
                <a href='login' id="login-nav" className='page-scroll'>
                  Login
                </a>
              </li>
              <li>
                <Link to='register' className='join-btn-1' style={{ display: 'none' }}>
                  Join Now
                </Link> 
                <Link to="register"><button id="login-btn" className="join-btn-2">Join Now</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation;
