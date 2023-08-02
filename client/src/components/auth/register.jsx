import React, { useState } from "react";
import "../../assets/register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { registerUser } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    password_confirmation: "",
    phone: "",
    pcountry: "",
  });
  const onSubmit = (values) => {
    dispatch(registerUser(values, navigate));
  };

  return (
    <div className="register-container">
      <Hamburger size={20} />
      <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-svg" />
      <div className="register-form">
        <Formik
          initialValues={state}
          onSubmit={onSubmit}
          validationSchema={Yup.object().shape({
            fname: Yup.string()
              .required("First name is required."),
            lname: Yup.string()
              .required("Last name is required."),
            email: Yup.string()
              .email("Invalid Email")
              .required("Email is required"),
            
            password: Yup.string()
              .min(8, "Password should be at least 8 chracters.")
              .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/i, "Password is invalid")
              .required("Password is required"),
            phone: Yup.string()
              .min(5, "Phone number should be at least 5 characters")
              .required(
                "Phone is required."),
            pcountry: Yup.string()
              .required("Country number is required."),
            
            password_confirmation: Yup.string()
              .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Password is not match."
                ),
              })
              .required("Confirm Password is required."),
          })}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
          }) => {
            return (
              <form>
                <div className="brand">
                  <img id="FD-logo" src="../img/fdlogo.png" alt="FD-logo" />
                  <h1 className="text-center register-title">Register</h1>
                </div>
                <div className="row form-content">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        placeholder="First Name"
                        onChange={handleChange}
                        valid={touched.fname && !errors.fname}
                        invalid={
                          touched.fname && !!errors.fname
                        }
                        value={values.fname}
                        required
                      />
                      <div className="text-left text-danger">
                      {errors.fname}
                      </div>
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
                         {errors.email}
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        valid={touched.password && !errors.password}
                        invalid={
                          touched.password && !!errors.password
                        }
                        value={values.password}
                        required
                      />
                      <FontAwesomeIcon icon={faEye} />
                      <div className="text-left text-danger">
                         {errors.password}
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        placeholder="Last Name"
                        onChange={handleChange}
                        valid={touched.lname && !errors.lname}
                        invalid={
                          touched.lname && !!errors.lname
                        }
                        value={values.lname}
                        required
                      />
                      <div className="text-left text-danger">
                         {errors.lname}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="phone-group">
                        <input
                          type="text"
                          className="form-control"
                          name="pcountry"
                          id="pcountry"
                          placeholder="+1"
                          onChange={handleChange}
                          valid={touched.pcountry && !errors.pcountry}
                          invalid={
                            touched.pcountry && !!errors.pcountry
                          }
                          value={values.pcountry}
                          required
                        />
                      
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          placeholder="Phone"
                          onChange={handleChange}
                          valid={touched.phone && !errors.phone}
                          invalid={
                            touched.phone && !!errors.phone
                          }
                          value={values.phone}
                          required
                        />
                        </div>
                        <div className="text-left text-danger">
                         {errors.pcountry}
                      </div>
                      <div className="text-left text-danger">
                         {errors.phone}
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password_confirmation"
                        placeholder="Create Password"
                        onChange={handleChange}
                        valid={touched.password_confirmation && !errors.password_confirmation}
                        invalid={
                          touched.password_confirmation && !!errors.password_confirmation
                        }
                        value={values.password_confirmation}
                        required
                      />
                      <FontAwesomeIcon icon={faEye} />
                      <div className="text-left text-danger">
                         {errors.password_confirmation}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="special-item">
                    Min 8 char, with at least upper case letter <br />
                    one number, and one special char.:!, @, $, #, &, *.
                  </p>
                  <p className="text-center special-item service">
                    By clicking "create account" you agree <br /> to our{" "}
                    <Link to="">Terms & Service</Link>
                  </p>
                </div>
                <div className="register-btn-area">
                  <Link to="#" onClick={handleSubmit} className="register-btn btn">
                    Create Account
                  </Link>
                </div>
                <div className="register-quiz">
                  <div className="">
                    <label className="quiz-label">
                      Do you have an account already?
                    </label>
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
