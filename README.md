need to create ur own .env and add API_URL=https://api.github.com

# Welcome to Sunrise, Sunset!

![Screenshot](/src/images/.png)

Have you got too much time on your hands and you just want to know what time the sun sets in a random city on the planet? <br/>
Maybe you want to really annoy your friend and you need to find out when it's past sunset in his country so you can call him and wake him up?<br/>

There an **infinite** number of uses for searching for the sunrise/sunset... you can just use it however it suits you!

## Table of Contents

- [Installation & Usage](#installation--usage)
- [Technologies](#technologies)
- [Changelog](#changelog)
- [Challenges](#challenges)
- [Bugs](#bugs)

## Installation & Usage

- Clone or download the repo
- Navigate to the `lytical-lap3-debug-nplatton` folder at the command line
- Run `npm install` to install dependencies

### Development

- Run `npm run dev` to launch the development application

### Deployment

- Run `npm run build` to launch the deployment build

### Testing

- While in the `lytical-lap3-debug-nplatton` folder run `npm test` to launch the test suite
- To view the coverage of the test suites run `npm run coverage` whilst in the same folder as above

## Technologies used

- React
- Redux
- Babel
- Axios
- Jest with React Testing Library

## Changelog

- Add `exact` to route in `App.js`
- Add page components to routes in `App.js`
- Import pages to `App.js`
- Wrap app in `Provider` in `index.js`
- Add `activeClassName` to home NavLink
- Turn Welcome page into anon fct that returns
- Wrap About page return contents in fragment
- Add `default` clause to reducer
- Replace depracated URL
- Add `id="root" to root div in `index.html`
- Fix some error handling
- Export reducer as anon fct
- Export all as anon fcts
- Add `useEffect` to load London times on initial render
- Add `try...catch` and `preventDefault`
- Create test `__mocks__` folder
- Webpack config
- Add files to `.gitignore`
- FIRST RAN TESTS
- declare fct variables
- Add label to location input field
- Add `role="form"` to form tag
- Add `role="alert"`
- ALL TESTS PASS
- FIRST RAN `npm run dev`
- Remove rename of `BrowserRouter`
- Set label display to none
- Add `titleCase` fct for loaction
- Define 404 route
- Create `NotFound` page
- Create (currently failing) test
- Add working back button
- Add test to `BackButton` component
- Working 404 page with test
- Create README.md
- Add favicon
- Finish README.md

#### After deadline:

- Add border to back button when clicked
- Fix `activeClassName` not working
- Fix fct to clear input box on form submit

## Challenges

- Attempting to find all the bugs without building the application or running the test suite
- Managed to pass half the tests without running the suite and the remaining were minor fixes
- Missed a couple of big things when running `npm run dev`
  - Forgot to import `App` into `index.js`
  - Didn't notice that `BrowserRouter` had been renamed

## Bugs

- No known bugs currently
