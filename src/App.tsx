import React from "react";
import { ConfigProvider, Spin } from "antd";
import { observer } from "mobx-react";
import { useStore } from "./helpers/use-store";
import LoggedIn from "./features/routers/logged-in";
import LoggedOut from "./features/routers/logged-out";

// order important so we can override antd
import "antd/dist/antd.css";
import "./App.scss";
import { AuthState } from "./stores/ui/auth-store/auth-store";

function App() {
  const rootStore = useStore();
  const {
    uiStore,
    uiStore: { authStore },
  } = rootStore;

  return (
    <ConfigProvider direction={uiStore.direction}>
      <div className="App">
        {authStore.authState === AuthState.Authenticating && <Spin />}
        {/* Load spinner while we are waiting for authentication - for both logged in + logged out */}
        {authStore.authState === AuthState.LoggedIn ? (
          <LoggedIn />
        ) : (
          <LoggedOut />
        )}
      </div>
    </ConfigProvider>
  );
}

export default observer(App);
