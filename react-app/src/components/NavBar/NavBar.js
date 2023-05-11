import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import gba_icon from '../../assets/favicon_io (1)/favicon-32x32.png'
import './NavBar.css'
import ProfileButton from './ProfileButton';
import { useLocation } from 'react-router-dom';
import gba_logo from '../../assets/gba_photos/gba_logo.gif'

const NavBar = () => {

  // comment to force push to heroku
  const user = useSelector(state => state.session.user)
  // console.log(user)
  const location = useLocation()
  // console.log(location)

  let session;
  if (!user) {
    session = (
      <div className='login-signup'>
        <div className='login'>
          <NavLink className='navlink login-signup-link' to='/login' exact={true}>Log In</NavLink>
        </div>
        {/* <div className='signup'>
          <a className='navlink login-signup-link' target='_blank' rel='noreferrer' href='https://clients.mindbodyonline.com/ASP/su1.asp?studioid=695081&tg=&vt=&lvl=&stype=-98&view=&trn=0&page=&catid=&prodid=&date=2%2f3%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1'>SignUp</a>
        </div> */}
      </div>
    );
  } else {
    session = (
     <div className="nav-right">
       <div>
         <ProfileButton user={user} />
       </div>
     </div>
    );
  }

  return (
    <div className='navbar'>
      <nav className='whole-nav' id={location.pathname === '/login' || location.pathname === '/sign-up' ? 'border' : null}>
        <div className='home-button'>
            <NavLink to='/' exact={true} activeClassName='active' className='navlink'>
              <div className='home-button-div'>
                {/* <span>
                  <img alt='' src={gba_icon}/>
                </span> */}
                {/* <img src={gba_logo} alt=''/> */}
                GBA 🏸
              </div>
            </NavLink>
        </div>
        {session}
      </nav>
      <div className='whole-bottom-nav' id={location.pathname === '/login' || location.pathname === '/sign-up' ? 'display-none' : null}>
        <NavLink exact to='/' activeClassName='active' className='navlink login-signup-link'>Home</NavLink>
        <NavLink to='/training' activeClassName='active' className='navlink login-signup-link'>Training</NavLink>
        <NavLink to='/camp' activeClassName='active' className='navlink login-signup-link'>Camp</NavLink>
        <NavLink to='/competition' activeClassName='active' className='navlink login-signup-link'>Competition</NavLink>
        <NavLink to='/coaches' activeClassName='active' className='navlink login-signup-link'>Coaches</NavLink>
        {/* <NavLink to='/gallery' activeClassName='active' className='navlink login-signup-link'>Photos</NavLink> */}
        <NavLink to='/updates' activeClassName='active' className='navlink login-signup-link'>Updates</NavLink>
        <NavLink to='/contact' activeClassName='active' className='navlink login-signup-link'>Contact Us</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
