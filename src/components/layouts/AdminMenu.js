import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminMenu.css";

const AdminMenu = () => {
  return (
    <div className="admin-menu-container">
      <div className="dashboard-menu">
        <h2 className="menu-heading">Admin Panel</h2>
        <div className="menu-items">
          <NavLink to="/dashboard/admin/create-category" className="menu-item">
            Create Category
          </NavLink>
          <NavLink to="/dashboard/admin/create-product" className="menu-item">
            Create Product
          </NavLink>
          <NavLink to="/dashboard/admin/products" className="menu-item">
            Products
          </NavLink>
          <NavLink to="/dashboard/admin/orders" className="menu-item">
            Orders
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="menu-item">
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
