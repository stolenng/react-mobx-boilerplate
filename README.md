<div align="center"><h1>React + MobX Boilerplate ^_^</h1></div>

<div align="center"><strong>Plug And Play(clone and code) </strong></div>
<div align="center">The most updated <b>React + MobX(2021)</b> Boilerplate With the latest Tech Stack</div>
<div align="center"><a href="https://react-mobx-boilerplate.netlify.app/" target="_blank">Demo</a></div>

<div align="center"><h2>Why you should clone it ASAP</h2></div>

<dl>
  <dt>Based On Create React App</dt>
  <dd>Get all the abilities of CRA out the box</dd>

  <dt>TypeScript</dt>
  <dd>Because we love types!</dd>

  <dt>MobX State Management</dt>
  <dd>Everything needed to get started with MobX</dd>

  <dt>Login + Authentication Management</dt>
  <dd>Login Page + Authentication implemented already for you</dd>

  <dt>Api Infrastructure</dt>
  <dd>Tired of writing API services all time ? Ready Api infrastucture for just add models/entities and focusing on the important parts of the development</dd>

  <dt>Antd Components Library</dt>
  <dd>Examples of antd components usage</dd>

  <dt>Ready Translations</dt>
  <dd>i18next ready translations, just add translations file and enjoy</dd>

  <dt>React Hook Form</dt>
  <dd>The best and most simple library to working with forms</dd>

  <dt>DayJS</dt>
  <dd>Because moment.js is dead :</dd>

  <dt>Sass</dt>
  <dd></dd>

  <dt>Mock Service Worker</dt>
  <dd>Simple library to mock server during development</dd>

  <dt>Prettier + Husky</dt>
  <dd>Get your code cleaned on each commit</dd>

  <dt>Todo List Example</dt>
  <dd>Full example of todo list with api calls, mobx and React</dd>

  <dt>Ready For Production!</dt>
  <dd>Environment management supported, just build and deploy your app</dd>

  <dt>Everything is modifiable</dt>
  <dd>If you don't like any part of the boilerplate, you can just replace in seconds !</dd>
</dl>

# Structure

### Translations

`public/locale` - Add `${languageName}.json` to support additional language.

### Components

Any small components that are building blocks for the project can be added here.

### Env

Jsons by the name of the environment, e.g `production.json`.
Anything added here will be available at the application in `index.tsx` and `create-store.ts`.

### Features

Here goes the more big "components", like the to-do list and big features like whole pages, chat, etc..

### Helpers

- `create-store.ts`
  - In charge of initializing everything we need for our application
  - Creating the `env` object we can access in our mobx-stores by using `getEnv()`
  - Creating the `RootStore` through `mobx-easy wrapRoot` function.
- `mobx-easy-wrapper.ts`
  - Wrapping `getEnv + getRoot` with the correct generic types, so we won't be forced to do it everywhere.
- `store-provider.ts`
  - Provider for the rootStore so we can use our hook `useStore` in every react component.

### Hooks

Hooks for the project, just like `useStore` gives us ability to access the `rootStore` from every react component.

### Mocks

For those who are interested in mocks during development,
You can add mocks freely in `mocks` folder.
<br>
If you want to disable - go to `index.tsx` and remove lines `27-30`

### Services

Here are all of the services of the project, for example: `translation-service.ts`.

- Core Service
  - Base Service - Common logic that relates to all services in the project that need to execute HTTP requests.
  - Http Service - Axios wrapped in a service with support at setting JWT token.
  - Crud Service - Service implements all CRUD functions, so we don't need to copy and paste it everywhere.
  - Api Factory - Stores all of our HTTP Service/API Services, used there declaration merging, so we can add dynamically services easily by just adding object to the array.
- Api Services
  - Auth Service - Implements logic regarding authentication.
  - Todos Service - Plain and simple, extends CRUD Service.

### Stores

MobX Stores and Models stored here, we are using `RootStore` and `DataStore` + `UiStore` to diffrenicate between our data in the application and the ui/views.
<br>
We Also use `mobx-easy` for easier sharing of `RootStore` between store and `Env` object. (you can read about it in the resources section)

### Styles

Here are the global styles of the project.

### Examples

- There is a todo list feature consists of:
  - Crud Service
  - MobX Store, MobX Model
  - React Components using mobx store and model
  - Basic styles
    <br>
- Environment
  - Ready File for dev + prod

# Resources

- Documentation:
  - https://mobx.js.org/README.html
  - https://reactjs.org/
  - https://www.typescriptlang.org/
  - https://create-react-app.dev/
  - https://react-hook-form.com/
  - https://github.com/stolenng/mobx-easy
  - https://day.js.org/
  - https://mswjs.io/
  - http://mobx-easy.georgy-glezer.com/docs/intro.html
  - https://react.i18next.com/
  - https://ant.design/
- Articles:
  - https://mobx.js.org/defining-data-stores.html
  - https://levelup.gitconnected.com/mobx-tips-and-pitfalls-92e635108653
  - https://levelup.gitconnected.com/react-hooks-rules-for-cleaner-code-3bceb5decf7
  - https://levelup.gitconnected.com/react-hooks-mobx-todolist-c138eb4f3d04
  - https://medium.com/front-end-weekly/separation-of-data-and-ui-in-your-web-app-2c3f1cc3fbda
- Course:
  - https://www.udemy.com/course/mobx-in-depth-with-react/

# Contribution

Feel free to talk to me on any social network, open pull requests, issues, suggest changes, and open pull requests :)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
