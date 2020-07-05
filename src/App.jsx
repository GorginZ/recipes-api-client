import React from "react";
import Recipes from "./components/Recipes";
// import Search from "./components/Search";
class App extends React.Component {
  state = {
    recipes: []
  } 

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/recipes")
    const data = await response.json()
    this.setState({
    recipes: data
  })
}

  render() {
    return this.state.recipes.map((recipe, index) => {
      return (
          <Recipes key={index} name={recipe.name}
          ingredients={recipe.ingredients}
          method={recipe.method} />
      )
    })
  }
}
//     const data = [
//       {
//         name: "Chocolate cake",
//         cooking_time: "2 hours",
//         method: [
//           'Mix all the ingredients together',
//           'Add the egg',
//           'Put in the oven'
//         ],
//         ingredients: [
//           'egg',
//           'sugar',
//           'butter'
//         ]
//       },
//       {
//         name: "Pumpkin soup",
//         cooking_time: "30 mins",
//         method: [
//           'Chop Pumpkin',
//           'cook pumpkin real good'
//         ],
//       ingredients: [
//         'Punpkin'
//       ]
//       }
//     ]
//     return data.map((recipes) => {
//       return (
//        <Recipes name={recipes.name}
//        cooking_time={recipes.cooking_time}
//        method={recipes.method}
//         />
//       )
//     })
//   }
// }
      
export default App;
