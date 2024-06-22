import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/UserMenu.css";

const UserMenu = () => {
  return (
    <div className="user-menu-container">
      <div className="dashboard-menu">
        <h2 className="menu-heading">Dashboard</h2>
        <div className="menu-items">
          <NavLink to="/dashboard/user/profile" className="menu-item">
            Profile
          </NavLink>
          <NavLink to="/dashboard/user/orders" className="menu-item">
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
