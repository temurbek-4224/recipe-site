import React from 'react';
import './recipecard.styles.scss';

const RecipeCard = (props) => (
  <div className='card'>
    < div
      className='background-image'
      style={{
        backgroundImage: `url(${props.mealImageURL})`
      }}
    />
    <div className='chef'>
      <div
        className='chef-image'
        style={{
          backgroundImage: `url(${props.chefImageURL})`
        }}
      />
      <div className='chef-data'>
        <h3>{props.chefName}</h3>
        <p>{props.chefEmail}</p>
      </div>
    </div>
    <div className='meal-data'>
      <h2>{props.mealName}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quaerat dolore. Nostrum porro est pariatur ad vel molestiae, voluptas magni placeat quam.
      </p>
      <footer><button>View more</button></footer>
    </div>
  </div>
);

export default RecipeCard;