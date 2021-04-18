import React from 'react';
import './mainpage.styles.scss';

import Navbar from '../../components/navbar/navbar.component';
import HomePage from '../homepage/homepage.component';

import { Route, Switch } from 'react-router-dom';

const MainPage = () => (
  <div className='container'>
    <div>
      <Navbar />
    </div>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  </div>
);

export default MainPage;