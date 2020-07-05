import React from "react";
import Recipes from "./components/Recipes";
import Search from "./components/Search";



// 9. Add a new function in <App /> named searchRecipes() it should take a search as a parameter, you then need to pass this function as a prop through <Search /> and <Form />

class App extends React.Component {
searchRecipes =(search)=>{
  console.log("search from searchRecipes " + search)
}
    render() {
        return (
          <>
            <div className="App">
               <Search search={this.props} />
               <Recipes />
            </div>
            </>
        );
    }
}

export default App;
