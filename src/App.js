import React from 'react';
import MainPage from './pages/mainpage/mainpage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import LogIn from './pages/loginpage/loginpage.component';
import AddRecipe from './pages/recipepage/recipe.component';
import Navbar1 from './components/navbar1/navbar1.component';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/login' component={LogIn} />
          <Route path='/add' component={AddRecipe} />
          <Route path='/navbar' component={Navbar1} />
        </Switch>

      </div>
    );
  }
}

export default App;