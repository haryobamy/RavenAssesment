import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Fictional company logo.svg';

function Navbar() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>{' '}
      <nav className="header__nav">
        <Link to="/" className="header__link">
          {' '}
          Dashboard{' '}
        </Link>{' '}
        <Link href="#" className="header__link">
          {' '}
          Markets{' '}
        </Link>{' '}
        <Link href="#" className="header__link">
          {' '}
          Wallet{' '}
        </Link>{' '}
        <Link to="login" className="header__link">
          {' '}
          Profile{' '}
        </Link>{' '}
      </nav>{' '}
      <div className="header__search">
        <input
          type="text"
          className="header__search-input"
          placeholder="Search..."
        />
      </div>{' '}
      <div className="header__profile">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="header__profile-img"
        />
        <span className="header__profile-name"> Olakunle T. </span>{' '}
      </div>{' '}
      <div className="mobile__profile">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="header__profile-img"
        />
        <i className="fa fa-earth"> </i> <i className="fa fa-burger"> </i>{' '}
      </div>{' '}
    </header>
  );
}

export default Navbar;
