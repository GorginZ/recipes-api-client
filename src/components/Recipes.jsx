import React from "react";

class Recipes extends React.Component {
   render() {
       const { name, method, ingredients } = this.props; //destructuring 
       const methodArr = JSON.parse(method)
       const ingredientsArr = JSON.parse(ingredients)
       return (
           <>
        <h1>{name}</h1>
           <h4>Ingredients</h4>
           <ul>
               {ingredientsArr.map((ingredient, index) => {
                   return <li key={index}> {ingredient}</li>
               })}
           </ul>

           <li>
               {methodArr.map((method, index) => {
                   return <li key={index}> {method}</li>
               })}
           </li>
           <hr/>
           
       </>
       )

   }
}







export default Recipes;

//for deleting and editing buttons 
// <div className="edit-delete-container">
// <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
// <span onClick={() => this.deleteRecipe(recipe.id)}>Delete</span>
// </div>