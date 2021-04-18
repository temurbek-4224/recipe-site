import React from 'react';
import './loginpage.styles.scss';

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  };

  render() {
    return (
      <div className='loginpage'>
        <div className='loginbox'>
          <h1>Login</h1>
          <form>
            <input
              type="email"
              placeholder='Email'
              name='email'
              value={this.state.email}
              required
            />
            <input
              type="password"
              placeholder='Password'
              name='password'
              value={this.state.password}
              required
            />
            <button type='submit'>Sign In</button>
            <button type='submit'>Register</button>
          </form>
        </div>
        <div
          className='image'
          style={{
            backgroundImage: 'url(https://du9bj9c2s4nh.cloudfront.net/wp-content/uploads/2020/06/meal-kit-toronto-980x618.jpg)'
          }}
        />
      </div>
    );
  }
}

export default LogIn;