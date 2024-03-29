import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import { validateAuthTokens } from '../../api';
import WelcomeModal from '../Modals/Welcome/WelcomeModal';
import './Home.sass';

const Home = () => {
  const { authTokens } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Array
      .from(document.getElementsByClassName('navbar'))
      .map((e) => e.classList.remove('fixed-top'));

    if (authTokens && authTokens.user && authTokens.token) {
      validateAuthTokens(authTokens.user, authTokens.token)
        .then((res) => res.status === 200 && setIsLoggedIn(true));
    }
  }, []);

  const fixNavbarTop = () => Array
    .from(document.getElementsByClassName('navbar'))
    .map((e) => e.classList.add('fixed-top'));

  if (isLoggedIn) { fixNavbarTop(); return <Redirect to="/order" />; }

  return (
    <>
      <WelcomeModal />
      <section id="Home">
        <article className="Main">
          <div className="Banner">
            <h1 className="Top">BLAZIN</h1>
            <h1 className="Bottom">PIZZA CO.</h1>
          </div>
          <div className="Buttons">
            <div className="Top">
              <Link to="/member/sign-in" onClick={fixNavbarTop} className="SignIn btn">
                SIGN IN
              </Link>
              <Link to="/member/register" onClick={fixNavbarTop} className="Register btn">
                REGISTER
              </Link>
            </div>
            <div className="Middle">
              <Link to="/order" onClick={fixNavbarTop} className="Guest btn">
                ORDER AS A GUEST
              </Link>
            </div>
            <div className="Bottom">
              <a href="#WelcomeModal" className="Info btn" data-toggle="modal">
                ?
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
