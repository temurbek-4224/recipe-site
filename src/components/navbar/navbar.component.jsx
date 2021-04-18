import React from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import foods from '../../base/base'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods
    }
  }

  render() {

    return (
      <div className='navbar'>
        <div className='user'>
          <div
            style={{
              backgroundImage: `url(${this.state.foods[0].chefImage})`
            }}
            className='user-image'
          />
          <div className='user-data'>
            <h2>Selena Gomes</h2>
            <p>selena@gmail.com</p>
          </div>
        </div>
        <div className='options'>
          <Link className='option' to='/'>Home</Link>
          <Link className='option' to='/add'>Add Recipe</Link>
          <Link className='option' to='/'>Contact</Link>
          <Link className='option' to='/login'>Logout</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;