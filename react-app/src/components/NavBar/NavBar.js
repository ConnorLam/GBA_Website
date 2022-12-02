import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import gba_icon from '../../assets/favicon_io (1)/favicon-32x32.png'

const NavBar = () => {

  const user = useSelector(state => state.session.user)
  // console.log(user)
  let session;
  if (!user) {
    session = (
      <div className='login-signup'>
        <div className='login-signup-link login'>
          <NavLink className='navlink' to='/login' exact={true}>Log In</NavLink>
        </div>
        <div className='login-signup-link signup'>
          <NavLink className='navlink' to='/sign-up' exact={true}>Sign Up</NavLink>
        </div>
      </div>
    );
  } else {
    // session = (
     
    // );
  }

  return (
    <nav>
      <div>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <div>
              {/* <span>
                <img alt='' src={gba_icon}/>
              </span> */}
              GBA
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
