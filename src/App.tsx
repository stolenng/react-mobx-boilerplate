import React from "react";
import "./App.css";
import { ConfigProvider } from "antd";
import { observer } from "mobx-react";
import { useStore } from "./helpers/use-store";

// order important so we can override antd
import "antd/dist/antd.css";
import "./App.scss";
import LoggedIn from "./features/routers/logged-in";
import LoggedOut from "./features/routers/logged-out";

function App() {
  const rootStore = useStore();
  const isAuthenticated = false;
  const { uiStore } = rootStore;

  return (
    <ConfigProvider direction={uiStore.direction}>
      <div className="App">
        {/* Load spinner while we are waiting for authentication - for both logged in + logged out */}
        {isAuthenticated ? <LoggedIn /> : <LoggedOut />}
      </div>
    </ConfigProvider>
  );
}

export default observer(App);
