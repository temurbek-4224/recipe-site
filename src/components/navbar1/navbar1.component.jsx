import React from 'react';
import './navbar1.styles.scss';
import { Link } from 'react-router-dom';
import foods from '../../base/base'

class Navbar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods
    }
  }

  render() {

    return (
      <div className='navbar1'>
        <div className='user1'>
          <div
            style={{
              backgroundImage: `url(${this.state.foods[0].chefImage})`
            }}
            className='user-image1'
          />
          <div className='user-data1'>
            <h2>Selena Gomes</h2>
            <p>selena@gmail.com</p>
          </div>
        </div>
        <div className='options1'>
          <Link className='option1' to='/'>Home</Link>
          <Link className='option1' to='/add'>Add Recipe</Link>
          <Link className='option1' to='/'>Contact</Link>
          <Link className='option1' to='/login'>Logout</Link>
        </div>
      </div>
    );
  }
}

export default Navbar1;