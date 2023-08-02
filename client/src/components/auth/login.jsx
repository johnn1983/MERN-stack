import React from "react";
import "../../assets/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/authActions";
const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serverError = useSelector(state => state.errors);
  console.log(serverError);
  const initialState = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    dispatch(loginUser(values, navigate));
  };
  return (
    <div className="home-container">
      <Hamburger size={20} />
      <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-svg" />
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="login-form">
            <Formik
              initialValues={initialState}
              onSubmit={onSubmit}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Invalid Email")
                  .required("Email is required"),
                password: Yup.string()
                  .min(8, "Password should be at least 8 chracters.")
                  .required("Password is invalid"),
              })}
            >
              {({ values, errors, touched, handleChange, handleSubmit }) => {
                return (
                  <form>
                    <div className="brand">
                      <img id="FD-logo" src="../img/fdlogo.png" alt="FD-logo" />
                      <h1 className="text-center register-title">Login</h1>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        valid={touched.email && !errors.email}
                        invalid={
                          touched.email && !!errors.email
                        }
                        value={values.email}
                        required
                      />
                      <div className="text-left text-danger">
                         {errors.email || serverError?.message}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        valid={touched.password && !errors.password}
                        invalid={
                          touched.password && !!errors.password
                        }
                        value={values.password}
                        required
                      />
                      <FontAwesomeIcon icon={faEye} className="eye-svg" />
                      <div className="text-left text-danger">
                         {errors.password}
                      </div>
                    </div>
                    <div className="forget-password">
                      <label>Forget your password?</label>
                    </div>
                      <button onClick={handleSubmit} className="login-btn">Login</button>
                    
                    <div className="register">
                      <label>Don't have an account ?</label>
                      <Link to="/register" className="register-link">
                        Register
                      </Link>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
