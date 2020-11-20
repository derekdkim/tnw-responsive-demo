import React from 'react';
import './index.css';

import Logo from '../../img/tnw.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-div'>
        <img src={Logo} alt='tnw-logo'/>
      </div>
      <div className='nav-div'>
        <div className='misc-nav-div' role='navigation'>
          <nav className='misc-nav'>
            <ul className='left-list misc-left-list'>
              <li>News</li>
              <li>Events ▾</li>
              <li>Business ▾</li>
              <li>AMAs</li>
              <li>Spaces</li>
              <li>{'Terms & Conditions'}</li>
            </ul>
            <ul className='right-list'>
              <li>About</li>
              <li>Advertise</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className='main-nav-div' role='navigation'>
          <nav className='main-nav'>
            <ul className='left-list'>
                <li>Latest</li>
                <li>Hard Fork</li>
                <li>Plugged</li>
                <li>Readme</li>
                <li>Growth Quarters</li>
                <li>Shift</li>
                <li>Neural</li>
              </ul>
          </nav>
          <div className='icon-collection'>
            <div className='icon-div'>
              <div className='search-icon'>&#x26B2;</div>
            </div>
            <div className='icon-div'>
              <div className='hamburger-menu-icon'>&#9776;</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;