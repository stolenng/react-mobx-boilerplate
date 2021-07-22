import React from "react";
import { ConfigProvider, Layout } from "antd";
import { observer } from "mobx-react";
import { useStore } from "./helpers/use-store";
import LoggedIn from "./features/routers/logged-in";
import LoggedOut from "./features/routers/logged-out";
import { AuthState } from "./stores/ui/auth-store/auth-store";
import Header from "./components/header/header";

// order important so we can override antd
import "antd/dist/antd.css";
import "./App.scss";
import Footer from "./components/footer/footer";

const { Content } = Layout;

function App() {
  const rootStore = useStore();
  const {
    uiStore,
    uiStore: { authStore },
  } = rootStore;

  return (
    <ConfigProvider direction={uiStore.direction}>
      <Layout className="App">
        {authStore.isLoggedIn && <Header />}
        <Content className="site-layout">
          {authStore.authState === AuthState.LoggedIn ? (
            <LoggedIn />
          ) : (
            <LoggedOut />
          )}
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default observer(App);
