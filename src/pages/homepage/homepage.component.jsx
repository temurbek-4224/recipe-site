import React from 'react';
import foods from '../../base/base';
import RecipeCard from '../../components/recipecard/recipecard.component';
import './homepage.styles.scss';


class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      value: ''
    }
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      value
    });
  }

  render() {
    const { foods, value } = this.state;
    const filteredFoods = foods.filter(food => {
      return food.mealName.toLowerCase().includes(value.toLowerCase());
    });
    return (
      <div className='homepage'>
        <h1>Recipes</h1>
        <input
          type='text'
          placeholder='Search for a recipe'
          className='searchbox'
          onChange={(e) => this.handleChange(e)}
        />
        <div className='boxes'>
          {
            filteredFoods.map((food, index) => (
              <RecipeCard
                key={index}
                mealImageURL={food.mealImage}
                chefImageURL={food.chefImage}
                chefName={food.chefName}
                chefEmail={food.email}
                mealName={food.mealName}
              />
            ))
          }
        </div>
      </div >
    );
  }
}

export default HomePage;