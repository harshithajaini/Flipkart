// import React from 'react'
import "./style.css";
import SearchComponent from "../SearchBox/search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [isLoggedin, setLoggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedin(true);
    }
  }, [isLoggedin])

  const handleLogout = () => {
    setLoggedin(false);
    localStorage.removeItem("token");
  }
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to={'/'}>
          <img src="/flipkart-explore-plus.svg" alt="logo" />
          </Link>
        </div>
        <SearchComponent />
        <div className="login" style={{ cursor: "pointer" }} >
          {!isLoggedin ?(<Link to="/login">
            <button className="login-container">
              <img src="/profile.svg" className="icon" alt="Profile Icon" />
              Login
            </button>
          </Link>):(
            <button className="login-container" onClick={handleLogout}>
              <img src="/profile.svg" className="icon" alt="Profile Icon" />
              Logout
            </button>)}

          <div className="login-dropdown-content">
            <li className="content-list">
              <a href="#" title="Sign Up" className="content-list-links">
                <span>New customer?</span>
                <span className="sign-up">Sign Up</span>
              </a>
            </li>
            <li className="content-list">
              <a href="#" title="My Profile" className="content-list-links">
                <img
                  className="login-dropdown-icons"
                  src="/profile.svg"
                  alt="My Profile"
                />
                My Profile
              </a>
            </li>
            <li className="content-list">
              <a
                href="#"
                title="Flipkart Plus Zone"
                className="content-list-links"
              >
                <img
                  src="/flipkart-plus-zone.svg"
                  alt="Flipkart Plus Zone"
                  className="login-dropdown-icons"
                />
                Flipkart Plus Zone
              </a>
            </li>
            <li className="content-list">
              <a href="#" title="Orders" className="content-list-links">
                <img
                  src="/orders.svg"
                  alt="Orders"
                  className="login-dropdown-icons"
                />
                Orders
              </a>
            </li>
            <li className="content-list">
              <a href="#" title="Wishlist" className="content-list-links">
                <img
                  src="/wishlist.svg"
                  alt="Wishlist"
                  className="login-dropdown-icons"
                />
                Wishlist
              </a>
            </li>
            <li className="content-list">
              <a href="#" title="Rewards" className="content-list-links">
                <img
                  src="/rewards.svg"
                  alt="Rewards"
                  className="login-dropdown-icons"
                />
                Rewards
              </a>
            </li>
            <li className="content-list">
              <a href="#" title="Gift Cards" className="content-list-links">
                <img
                  src="/gift-cards.svg"
                  alt="Gift Cards"
                  className="login-dropdown-icons"
                />
                Gift Cards
              </a>
            </li>
          </div>
        </div>
        <div className="cart" style={{ cursor: "pointer" }}>
          <img src="/cart.svg" className="icon" />
          Cart
        </div>
        <div className="become-seller" style={{ cursor: "pointer" }}>
          <img
            src="/become-seller.svg"
            alt="Become a Seller"
            className="icon"
          />
          Become-Seller
        </div>
        <div className="extra-links">
          <div className="extra-links-container">
            <img
              src="/dropdown-with-help-links.svg"
              alt="Dropdown with more help links"
              className="icon"
            />
          </div>
          <div className="extra-links-dropdown">
            <li className="extra-links-content-list">
              <a href="#" title="Orders" className="content-list-links">
                <img
                  src="/notification.svg"
                  alt="Orders"
                  className="login-dropdown-icons"
                />
                Notification Preferences
              </a>
            </li>
            <li className="extra-links-content-list">
              <a
                href="#"
                title="Notification Preferences"
                className="content-list-links"
              >
                <img
                  src="/customer-care.svg"
                  alt="Orders"
                  className="login-dropdown-icons"
                />
                24*7 Customer Care
              </a>
            </li>
            <li className="extra-links-content-list">
              <a href="#" title="Customer Care" className="content-list-links">
                <img
                  src="/advertise.svg"
                  alt="Advertise"
                  className="login-dropdown-icons"
                />
                Advertise
              </a>
            </li>
            <li className="extra-links-content-list">
              <a href="#" title="Advertise" className="content-list-links">
                <img
                  src="/download-app.svg"
                  alt="Download App"
                  className="login-dropdown-icons"
                />
                Download App
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
