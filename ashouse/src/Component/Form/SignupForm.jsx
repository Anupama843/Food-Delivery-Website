import React from "react";
import "./SignupForm.css";
import { useState } from 'react';
import {
  useAuthContext,
  signUpSuccess,
  signUpFail
} from "../../contexts/AuthContext";
import { fetchRegister } from '../../fake-services';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

function SignupForm({ isOpen, handleClose }) {

  const initialValue = { name: "", dob: "", username: "", password: "" };
  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const { auth, dispatch } = useAuthContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validate(formValue);
    setFormError(errors);
    if (Object.keys(errors).length !== 0) {
      return;
    }

    setLoading(true);
    postFormData();
  };

  function postFormData() {
    let profile = {};
    profile.name = formValue.name;
    profile.dob = formValue.dob;
    
    fetchRegister(formValue.username, formValue.password, 'access', profile)
      .then(userInfo => {
        setLoading(false);
        dispatch(signUpSuccess(formValue.username));
      }).catch(function(error) {
        console.log("error = " + error.message);
        setLoading(false);
        setFormError({username: "Invalid username, please try again"});
        dispatch(signUpFail(error));
      });
  }

  const validate = (value) => {
    const error = {};
    if (!value.name) {
      error.name = "Name is require";
    }
    if (!value.dob) {
      error.dob = "DOB is require";
    }
    if (!value.username) {
      error.username = "Username is required";
    } else if (value.username.length < 3) {
      error.username = "Username should be more then 3 characters!"
    }
    if (!value.password) {
      error.password = "Password is required";
    } else if (value.password.length < 4) {
      error.password = "Password should be more then 4 characters"
    }
    return error;
  }

  if (!isOpen || auth.isLoggedIn) {
    return null;
  }

  return (
    <div className="signup-modal-container">
      
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className='btn-f' onClick={handleClose}><i className="far fa-times-circle"></i></button>
        </div>
        <form className='form-container' onSubmit={handleSubmit}>
            <div>
              <h1 className='formTitle'>SignUp Form</h1>
              <div className="field">
                <label>Name* </label>
                <input type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formValue.name}
                  onChange={handleChange}
                />
              </div>
              <p className='errors'>{formError.name}</p>
              <div className="field">
                <label>Date of Birth*</label>
                <input type="date"
                  max={new Date()}
                  name="dob"
                  placeholder="MM/DD/YYYY"
                  value={formValue.dob}
                  onChange={handleChange}
                />
              </div>
              <p className='errors'>{formError.dob}</p>
              <div className="field">
                <label>Username* </label>
                <input type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChange} />
              </div>
              <p className='errors'>{formError.username}</p>
              <div className="field">
                <label>Password* </label>
                <input type="Password"
                  name="password"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChange} />
              </div>
              <p className='errors'>{formError.password}</p>
              <button className='btn-f'>Submit</button>
              <button className='btn-f' onClick={handleClose}>Cancel</button>
            </div>
          </form>
      </div>
      {/* {loading && <LoadingSpinner/>} */}
    </div>
  );
}

export default SignupForm;
