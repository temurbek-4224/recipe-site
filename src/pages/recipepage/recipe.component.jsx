import React from 'react';

import './recipe.styles.scss';

class AddRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingradients: '',
      description: '',
      image: '',
      notes: ''
    }
  }

  render() {
    return (
      <div className='recipes'>
        <h1>Add a recipe</h1>
        <form>
          <div className='right-side'>
            <input
              type="text"
              placeholder='Name of the recipe'
              name='name'
              value={this.state.name}
              required
            />
            <textarea
              name="ingradients"
              placeholder='ingradients'
              cols="30"
              rows="10"
              required
            >{this.state.ingradients}</textarea>
            <textarea
              name="description"
              placeholder='Recipe description and how to make it'
              cols="30"
              rows="10"
              required
            >{this.state.description}</textarea>
          </div>
          <div className='left-side'>
            <textarea
              name="image"
              placeholder='Add an image'
              cols="30"
              rows="10"
              required
            >{this.state.image}</textarea>
            <textarea
              name="notes"
              placeholder='Notes'
              cols="30"
              rows="10"
              required
            >{this.state.notes}</textarea>
            <button type='submit'>Publish recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
