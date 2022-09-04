# Pokemon pokedex app using React and the Poki API

This is a code test project from [3 Sided Cube](https://3sidedcube.com).

In this Project I use React Class components and Functional components to:
    * Display a Pokemon List on a Dashboard.
    * Display a Pokemon page with information on the selected pokemon.
    * Search through the Pokemon database.
    * Filter Pokemon based on their generation.
    * Compare 2 Pokemon's stats.

I have also used Bootstrap and custom css to style the application and display the Pokemon cards. I chose Bootstrap because of their easy "card" styling and container along wiht the custom styling as that is how I would normally style the project.

I used a mix of Class and Functional components to show my understanding of both along with react Hooks. This was a challenge as I have not used Functional components and hooks before so I had to learn the difference between the new hooks and the old class methods. One particular challenge that I aced was when making the Pokemon page, this was because I needed to get the Pokemon Index from the URL but the methods that I was used to using, this.props.match.params, cannot be used in react v6 so I have to find a way around this which I did by using the hook useParams().

Some extra features I added are that you are able to go into the Pokemon page to view its information from both the Search page and the Filter page. I did this useing the React Browser Router and specifying the path.

If I had more time for this project then I would like to style it up a bit more to look like the pokedex from either the first season of pokemon or the games. I would also have liked to style the Pokemon info page to looks like a pokemon card. Some functionality I would add in would be the ability to Create a profile and login so that the user would be able to save pokemon to their favourites and create their own teams.


# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm instal`
Installs all dependencies needed to run the project

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
