import React from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "antd";

const Login = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography.Title level={2}>{t("login")}</Typography.Title>
    </div>
  );
};

export default Login;
