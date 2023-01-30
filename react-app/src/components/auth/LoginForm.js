import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { NavLink } from 'react-router-dom';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const demoEmail = "demo@aa.io";
    const demoPassword = "password";
    const data = await dispatch(login(demoEmail, demoPassword));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='half-half'>
      <div className='login-signup-page'>
        <div className='login-signup-header'>
          Log In to GBA (for coaches only)
        </div>
        <form onSubmit={onLogin} className='login-signup-form'>
          <div>
            {errors.map((error, ind) => (
              <div className='white' key={ind}>{error}</div>
            ))}
          </div>
          <div id='input-field'>
            {/* <label htmlFor="email">Email</label> */}
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
              required
            />
          </div>
          <div id='input-field'>
            {/* <label htmlFor="password">Password</label> */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              required
            />
            <div className='login-buttons'>
              <button className='actual-login' type="submit">Login</button>
              <button className='actual-login' onClick={handleDemo}>Login as Demo User</button>
            </div>
            {/* <div className='login-signup-question'>
                  Don't have an account?&nbsp;<span><NavLink className='ls-link' to={'/sign-up'}>Sign Up!</NavLink></span>
            </div> */}
          </div>
        </form>
      </div>

      {/* <div className='white login-pic'>
        <p className='white'>
        </p>
      </div> */}
    </div>
  );
};

export default LoginForm;
