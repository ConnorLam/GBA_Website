import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-signup-page'>
      <div className='login-signup-header'>
        Create an Account
      </div>

      <form onSubmit={onSignUp} className='login-signup-form'>
        <div>
          {errors.map((error, ind) => (
            <div className='white' key={ind}>{error}</div>
          ))}
        </div>
        <div id='input-field'>
          {/* <label>First Name</label> */}
          <input
            placeholder='First Name'
            type='text'
            name='firstname'
            onChange={updateFirstName}
            value={firstName}
            required
            
          ></input>
        </div>
        <div id='input-field'>
          {/* <label>Last Name</label> */}
          <input
            placeholder='Last Name'
            type='text'
            name='lastname'
            onChange={updateLastName}
            value={lastName}
            required
          ></input>
        </div>
        <div id='input-field'>
          {/* <label>User Name</label> */}
          <input
            placeholder='User Name'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            required
          ></input>
        </div>
        <div id='input-field'>
          {/* <label>Email</label> */}
          <input
            placeholder='Email'
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
            required
          ></input>
        </div>
        <div id='input-field'>
          {/* <label>Password</label> */}
          <input
            placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required
          ></input>
        </div>
        <div id='input-field'>
          {/* <label>Repeat Password</label> */}
          <input
            placeholder='Repeat Password'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div id='input-field' className='login-buttons'>
          <button className='actual-login' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
