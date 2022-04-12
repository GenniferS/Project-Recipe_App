import React from "react";

function RecipeView({ recipes, deleteRecipe }) {
  return recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td>
            <img src={photo} alt="Recipe"/>
          </td>
          <td className="content_td">
            <p>{ingredients}</p>
          </td>
          <td className="content_td">
            <p>{preparation}</p>
          </td>
          <td>
            <button name="delete" onClick={() => deleteRecipe(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
  );
}

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeView recipes={recipes} deleteRecipe={deleteRecipe} />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
