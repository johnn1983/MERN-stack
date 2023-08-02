import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";
import  Login  from "./components/auth/login";
import  Register  from "./components/auth/register";
import Dashboard from './dashboard/Index';
import Home from "./Home";
import { Footer } from "./components/footer";
import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";
import PrivateRoute from './components/privateRoutes/privateRoute';
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from 'jwt-decode'
import {getCurrentUser} from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  const [landingPageData, setLandingPageData] = useState({});
  const dispatch = useDispatch();
  if(localStorage.getItem('jwtToken')) {
    setAuthToken(localStorage.getItem('jwtToken'));
    dispatch(getCurrentUser());
  }
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>       
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/' element={<PrivateRoute/>}>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>

    </div>
  );
};

export default App;
