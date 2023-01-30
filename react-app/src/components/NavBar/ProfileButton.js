import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";

const ProfileButton = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  function toggleMenu(e) {
    setShowMenu((current) => !current);
  }
  console.log(user)

  useEffect(() => {
    const closeMenu = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/");
  };

  return (
    <div>
      <div>
            <div onClick={e => toggleMenu(e)} className="profile-button">
                {/* <img className='profile-image' src="https://blog.playo.co/wp-content/uploads/2017/04/feather-shuttlecock.jpg" alt=""/> */}
                <img className='profile-image' src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'} alt=''/>
            </div>
            {showMenu && (
                <div className="drop-down">
                        <div className="dropdown-user">
                            <span><i className="fa-regular fa-user logo"></i></span>
                            {user.firstName} {user.lastName}
                        </div>
                      <NavLink className='navlink' to='/create-update' exact={true}>
                          <div className="dropdown-info">
                              <span><i className="fa-solid fa-square-plus logo"></i></span>
                              Post Update
                          </div>
                      </NavLink>
                        <div onClick={onLogout} className="dropdown-info">
                            <span><i className="fa-solid fa-arrow-right-from-bracket logo"></i></span>
                            <LogoutButton />
                        </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default ProfileButton;
