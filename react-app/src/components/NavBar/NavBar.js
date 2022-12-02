import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import gba_icon from '../../assets/favicon_io (1)/favicon-32x32.png'
import './NavBar.css'
import ProfileButton from './ProfileButton';

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
    session = (
     <div className="nav-right">
       <NavLink className="navlink" to="/upload-video" exact={true}>
       </NavLink>
       <div>
         <ProfileButton user={user} />
       </div>
     </div>
    );
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
      {session}
    </nav>
  );
}

export default NavBar;
