import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createStore, { Environment } from "./helpers/create-store";
import { StoreProvider } from "./helpers/store-provider";

let envConfig: Environment;
const nodeEnv = process.env.NODE_ENV;

try {
  envConfig = require(`./env/${nodeEnv}.json`);
} catch {
  envConfig = require("./env/development.json");
}

const { rootStore, env } = createStore({ envConfig });

const initApp = async () => {
  await env.translationService.init();

  ReactDOM.render(
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>,
    document.getElementById("root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

  reportWebVitals();
};

initApp();
