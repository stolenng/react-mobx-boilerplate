import React from "react";
import { ConfigProvider } from "antd";
import { observer } from "mobx-react";
import { useStore } from "./helpers/use-store";
import LoggedIn from "./features/routers/logged-in";
import LoggedOut from "./features/routers/logged-out";

// order important so we can override antd
import "antd/dist/antd.css";
import "./App.scss";
import { AuthState } from "./stores/ui/auth-store/auth-store";
import LanguageSelect from "./features/language-select/language-select";

function App() {
  const rootStore = useStore();
  const {
    uiStore,
    uiStore: { authStore },
  } = rootStore;

  return (
    <ConfigProvider direction={uiStore.direction}>
      <div className="App">
        {authStore.authState === AuthState.LoggedIn ? (
          <LoggedIn />
        ) : (
          <LoggedOut />
        )}

        <LanguageSelect />
      </div>
    </ConfigProvider>
  );
}

export default observer(App);
