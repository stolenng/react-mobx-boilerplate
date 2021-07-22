import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Layout } from "antd";
import { useStore } from "../../helpers/use-store";
import { observer } from "mobx-react";

const Header = () => {
  const { t } = useTranslation();
  const {
    uiStore: { authStore },
  } = useStore();

  return (
    <Layout.Header className="header">
      {authStore.isLoggedIn && (
        <div className="header-user-actions">
          <span>
            {t("hello")} {authStore.user?.username}
          </span>
          <Button type="primary" danger onClick={authStore.logout}>
            {t("logout")}
          </Button>
        </div>
      )}
    </Layout.Header>
  );
};

export default observer(Header);
