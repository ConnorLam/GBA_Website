import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div onClick={onLogout}>
        Logout
      </div>
    </div>
  );
};

export default LogoutButton;
