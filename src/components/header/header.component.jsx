import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <Link className='option' to='/'>Dashboard</Link>
    {/* <h3>Dashboard .</h3> */}
    <Link className='settings' to='/navbar'><i class="fas fa-cog"></i></Link>

  </div>
);

export default Header;