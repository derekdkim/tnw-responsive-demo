import React from 'react';

const Header = () => {
  return (
    <div>
      <div className='logo-div'></div>
      <div className='nav-div'>
        <div className='misc-nav-div'>
          <nav className='misc-nav'>
            <ul className='left-list'>
              <li>News</li>
              <li>Events</li>
              <li>Business</li>
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
        <div className='main-nav-div'>
          <nav className='main-nav'>
            <ul className='left-list'>
                <li>Latest</li>
                <li>Hard Fork</li>
                <li>Plugged</li>
                <li>Readme</li>
                <li>Growth Quarters</li>
                <li>{'Terms & Conditions'}</li>
              </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;