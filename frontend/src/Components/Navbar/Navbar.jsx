import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/auth';
import { validateAuthTokens } from '../../api';

import './Navbar.sass';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { authTokens, setAuthTokens } = useAuth();

  useEffect(() => authTokens && authTokens.user && authTokens.token && (
    validateAuthTokens(authTokens.user, authTokens.token)
      .then((res) => res.status === 200 && setIsLoggedIn(true))
  ), [authTokens]);

  const navLinkClicked = (e) => {
    Array
      .from(document.getElementsByClassName('nav-link active'))
      .map((t) => t.classList.remove('active'));
    e.target.classList.add('active');
  };

  const changeBannerTextColor = (color) => Array
    .from(document.getElementsByClassName('BannerText'))
    .forEach((e) => { e.style.color = color; });

  const bannerMouseOver = () => changeBannerTextColor('#e2e2e2');
  const bannerMouseOut = () => changeBannerTextColor('#afafaf');

  const handleLogOut = () => {
    setAuthTokens('');
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <Link
        to="/"
        className="navbar-brand"
        onClick={navLinkClicked}
        onMouseOver={bannerMouseOver}
        onMouseOut={bannerMouseOut}
      >
        <div id="Banner" className="justify-content-center">
          <h1 className="BannerText d-block">BLAZIN</h1>
          <h1 className="BannerText d-block">PIZZA CO.</h1>
        </div>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#NavbarCollapse"
      >
        <i id="NavbarToggler" className="far fa-compass text-light" />
      </button>
      <div id="NavbarCollapse" className="collapse navbar-collapse text-center">
        <div id="NavbarNav" className="ml-auto navbar-nav">
          <Link
            to="/order"
            className="Order nav-item nav-link active"
          >
            ORDER
          </Link>
          {isLoggedIn
            ? (
              <>
                <Link
                  to={{
                    pathname: '/order/history',
                    state: { memberId: authTokens.user },
                  }}
                  className="History nav-item nav-link"
                >
                  HISTORY
                </Link>
                <a
                  href="/"
                  className="LogOff nav-link nav-item"
                  onClick={handleLogOut}
                >
                  SIGN OUT
                </a>
              </>
            ) : (
              <>
                <Link to="/member/sign-in" className="SignIn nav-item nav-link">
                  SIGN IN
                </Link>
                <Link to="/member/register" className="Register nav-item nav-link">
                  REGISTER
                </Link>
              </>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
