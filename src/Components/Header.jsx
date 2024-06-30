import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
const Header = () => {
  const [navBerFix, setNavFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY >= 50) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
      // const sticky = navbar.offsetTop;
      // if (window.pageYOffset >= sticky) {
      //   setNavFixed(true);
      // } else {
      //   setNavFixed(false);
      // }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Login />
      <header id='navbar' className={navBerFix ? 'navberfixed container-fluid' : 'container-fluid'}>
        <div className="container">
          <nav className="navber d-flex align-items-center">
            <Link to="/" className="d-flex justify-content-start align-items-center logomenu">
              <i className="fa-solid fa-bars fs-2 btn d-block d-md-none headermenu"></i>
              <img src="https://cdn.prod.website-files.com/63b7bb07476f22ccbab419d5/63b7bcb4fd7a42fd9af9c6ed_Logo.webp" alt="Logo" className="img-fluid brand-logo" />
            </Link>
            <form action="/search" className="input-group searchdeskop d-none d-md-flex ms-5">
              <input type="text" name='q' className="form-control" placeholder="Search" autoComplete='off' />
              <input type="submit" className="input-group-text" value="Search" />
            </form>
            <button className="homeloginbtn btn mx-2" data-bs-toggle="modal" data-bs-target="#loginmodel" type="button">
              <i className="fa-regular fa-circle-user"></i>
              &nbsp;Login
            </button>
            <i className="fa-solid fa-cart-shopping mx-2 text-light pointer"></i>
          </nav>
          <form action="/search" className="input-group d-flex d-md-none searchmob pb-2">
            <input type="text" className="form-control" placeholder="Search" autoComplete='off' />
            <input type="submit" className="input-group-text" value="Search" />
          </form>
        </div>
      </header>
    </>
  )
}

export default Header