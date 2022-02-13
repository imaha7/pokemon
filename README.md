# Pokemon Ilham Maulana Habibie

## Tokopedia Software Engineer - Web Platform Submission Form

In the project directory, you can run:

## npm cache clean --force (Optional)
Clean your previous npm caches to fix node_modules bug issues.

## npm install
Runs all desired packages before you run npm start.

## npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## Project Assignment
## Web Platform Engineers - Tokopedia
Requirements:
1. Build a web app using React.js (allowed to use Create React App, Create Next
App, or your own starter template) that has 3 pages, Pokemon List, Pokemon
Detail, and My Pokemon List. Your web app UI/UX should be mobile-first &
single page application (SPA) and follow requirements listed below.
2. You can use Rest-API from https://pokeapi.co/ as your data source. But using
GraphQL (graphql-pokeapi) is a big plus.
3. Pokemon List page; should show a list of Pokemons’ names and the owned
total. When a Pokemon is clicked, it should go to that Pokemon Detail page.
4. Pokemon Detail page; should show a picture of the Pokemon with its moves
and types (this information is from the API, feel free to add more information
on the Pokemon if you want to). The mandatory thing is that there should be
a button to catch the Pokemon, (success probability is 50%), if success then
the user can give the Pokemon a nickname and add that Pokemon to `My
Pokemon List’. You can catch the same pokemon multiple times but need to
give a different nickname for each pokemon.
5. My Pokemon List page; should show a list (like Pokemon List page, but with
each of their nicknames as well) of all Pokemons you have caught. It should
also be possible to remove/release a Pokemon from the list on this page. The
pokemons in this list persist even after a full page reload.
6. Make your web-app as performant as possible. You can use tools such as
Lighthouse to help you audit your web-app.
7. Kindly provide hosted project repository (can be GitHub, GitLab, or
Bitbucket) and deployed web-app (you can use free platform solutions such
as Vercel, Surge, Github Pages, Firebase, Netlify or other)

## Notes:
1. Your web app UI/UX should be mobile-first
2. Good and usable UI / UX is a plus! We appreciate you if you can give your best in
designing great UI for your customers when you join Tokopedia.
3. Automated test (integration test and unit test) is a big plus
4. Web Platform Engineers in Tokopedia are currently using these stacks, so we
expect you to be able to show us your competencies with technologies listed below:
- React with React Hooks and React Context
- GraphQL using Apollo Client (https://www.apollographql.com/)
- CSS-in-JS using Emotion (https://emotion.sh/)
- Unit Test using Jest (https://jestjs.io/) and React Testing Library
(https://testing-library.com/)
- Webpack
- AMP, PWA, SPA & SSR (Universal Rendering)
- Web Capabilities (https://web.dev/fugu-status/)
