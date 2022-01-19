import React from "react";
import "./SignupForm.css";
import "./SigninForm.css";
import { useState } from 'react';
import {
  useAuthContext,
  loginSuccess,
  loginFail
} from "../../contexts/AuthContext";
import { fetchLogin } from '../../fake-services';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

function SigninForm({ isOpen, handleClose }) {

  const initialValue = { username: "", password: "" };
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
    fetchLogin(formValue.username, formValue.password)
      .then(userInfo => {
        setLoading(false);
        dispatch(loginSuccess(formValue.username));
      }).catch(function(error) {
        setLoading(false);
        setFormError({password: "Invalid username and/or password"});
        dispatch(loginFail(error.message))
      });
  };

  const validate = (value) => {
    const error = {};
    if (!value.username) {
      error.username = "Username is require";
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
    <div className="signin-modal">
      <div className="signin-modal-container">
        <div className="titleCloseBtn">
          <button className='btn-f' onClick={handleClose}><i className="far fa-times-circle"></i></button>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
              <h1 className='formTitle'>SignIn Form</h1>
              <div className="field">
                <label>Username* </label>
                <input type="text"
                  name="username"
                  placeholder="Username"
                  value={formValue.username}
                  onChange={handleChange}
                />
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
      {loading && <LoadingSpinner/>}
    </div>
  );
}

export default SigninForm;
