need to create ur own .env and add API_URL=https://api.github.com

# Welcome to Github 👀!

![Screenshot](/src/images/screenshot.png)

Have you got too much time on your hands and stalk other members on Github without actually going on github👀? () <br/>
Maybe you are just data conscious and want to see what data is available about yourself on the net?<br/>

Here are Github👀 we do not care about your reasoning, just that you enjoy your new found access to data!

## Table of Contents

- [Installation & Usage](#installation--usage)
- [Technologies](#technologies)
- [Changelog](#changelog)
- [Challenges](#challenges)
- [Bugs](#bugs)

## Installation & Usage

- Clone or download the repo
- Run `npm install` to install dependencies

### Development

- Run `npm run dev` to launch the development application on localhost: 6969

### Deployment

- Run `npm run build` to launch the deployment build

### Testing

- While in the `Github-clone` folder run `npm test` to launch the test suite
- To view the coverage of the test suites run `npm run coverage` whilst in the same folder as above

## Technologies used

- React
- Redux
- Babel
- Axios
- Jest with React Testing Library
- Github api (available at : https://api.github.com)

## Changelog

- Initial commit
- Create file system
- Layout of index.js and App.js
- Set up .env with API_URL
- Set up reducer and store
- Template readme
- Update action file
- connected the index.js to index.html
- added Header
- Create form component
- Finished data extraction in actions/index.js
- Set up test config file
- Fix testConfig file
- favicon added
- linked files to app.js
- Add test for Form component
- fixed the coneecting issue from app.js to index.js
- Turn into single page app
- Create 404 page with test
- Remove license from extraction
- Made fct asynchronous
- Create resut page template
- Set up page to interact with store
- Recieving data as expected
- Set up Home page for dynamic update
- Add error display and loading
- Add test suite to Home page
- Create fil for RepoBar
- centralise form in Home page
- Layout of RepoBar done
- Add hover effect to RepoBar
- Add test suite for repo bar component
- Export RepoBar component
- Styling the search form
- Results has now mapping


## Challenges

- styling the list of repos after being searched 
- getting the correct data rendered back (in its correct format) after search
- testing the API whilst the internet was out
- exporting and importing the correct files
- getting the reducers testing to work

## Bugs

- No known bugs currently
- Did not have time to add onClick events on specific repos
