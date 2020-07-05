Specs
We're going to build an app that gets data from a recipes api, we're also going to lift state and use event handlers
This is the functionality you're shooting for https://compassionate-kepler-41026c.netlify.app/
Try typing in pizza, pasta or burgers

Core

1. Create a new react app
2. Make the app component return <h1>hello world</h1>
3. Add two new components, <Search /> and <Recipes />, just return an h1 in both for now with "on search" and "on recipes"
4. Add these components to to <App />, remove the "hello world"
5. Create a new component <Form />, it should render a form with 1 input:text for searching and an input:submit
6. Render the <Form /> in the <Search /> component, remove the "on search"
7. Add an onChange event handler to the search input in the form, ensure that the state for search is set every time something is typed
8. Add an onSubmit event handler for the form, this event handler should be defined in <Form /> and preventDefault()


9. Add a new function in <App /> named searchRecipes() it should take a search as a parameter, you then need to pass this function as a prop through <Search /> and <Form />


10. Invoke the searchRecipes function you passed as a prop in the onSubmit event handler in <Form />, it should take the search state as an argument
11. console.log the search parameter in searchRecipes, you have now successfully lifted state!
12. Sign up to the https://spoonacular.com/food-api food api
13. We'll need to use the search recipes endpoint https:spoonacular.com/food-api/docs#Search-Recipes, test this endpoint out in postman, it needs an apiKey in the query string
14. In searchRecipes() make a fetch request to the search recipes endpoint https://spoonacular.com/food-api/docs#Search-Recipes
15. Get back the response and setState (should be an array of recipes)
16. Pass the array of recipes as a prop to <Recipes />
17. Map through the props passed and render jsx in <Recipes />

Advanced
1. Implement React router in the App, have a couple of pages maybe one for searching and one that actually displays some data, use your imagination




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
