# Frontend Test

## Julian's Notes

### Setup choices

- Upgraded to Create React App 4

- Added the latest versions of Leaflet and React Leaflet

- Added Husky, ESLint, Stylelint and Prettier

- Added styled-reset and a global style

- Added QA Wolf for automatic browser test recording

- Added jsconfig to configure absolute imports

### Design choices

- I added a list search filter component as a bonus

- I can see Hivebrite is using Avenir (well at least on the login page), so as a free alternative I’m using Nunito from Google’s CDN

### Architecture choices

- Since everything is happening within the locality of the same page there is no real need for state sharing or persistence with Redux or useContext, so instead I opted for useState on the page level.

- Since loading is super fast and we don't really have an API I didn't show a loader or errors. If needed, we could use the two fields provided by React Query for this purpose.

### Syntax choices

- I’ve used named imports to prevent deliberate or accidental renaming, and help IDEs with autocomplete

- I've kept the double quotes since Create React App 4 uses them by default

### Testing choices

- I've only made basic tests with react-testing-library, just as sanity checks

- I decided to also use Playwright / QA Wolf to create a browser test, which in a real life app would follow the scenario of the Acceptance Criteria of the User Story

- See `.qawolf/frontend-test.test.js` (note: before running QA Wolf you need to start the the app with `yarn start`).

### What could have been improved

- Design: there are no breakpoints so the design is not very responsive

- Performance: The list is a bit laggy, it would benefit from using a virtual DOM list, for instance using React Virtualized

- Error management: While our test app loads things quickly and without error, on a real app we would need to use the loading and error fields provided by React Query

- UX: Display more entities on the map using react-leaflet-markercluster like Hivebrite?

## Installation

### `yarn --pure-lockfile`

This will install the exact subdependencies as they were frozen at the time of the commit.

This is good to prevent any last minute surprise, especially if you build on the CI.

If you are a developer and don't mind performing updates you can also simply use `yarn`.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner.

### `yarn test:qawolf`

Note: you first need to run `yarn start` otherwise QA Wolf won't find the application.

In continuous integration environments you may need to write a custom script to bootstrap it.

### `yarn build`

Builds the app for production to the `build` folder.
