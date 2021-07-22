import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Input, Space, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useStore } from "../../helpers/use-store";

interface FormProps {
  username: string;
  password: string;
}

const Login = () => {
  const {
    uiStore: { authStore },
  } = useStore();
  const { t } = useTranslation();
  const { control, reset, handleSubmit } = useForm<FormProps>();

  useEffect(() => {
    reset({
      username: "",
      password: "",
    });
  }, [reset]);

  const login = async (data: FormProps) => {
    await authStore.login(data.username, data.password);
  };

  return (
    <Card className="login-card">
      <Space direction="vertical">
        <Typography.Title level={2}>{t("login")}</Typography.Title>
        <Typography.Text>{t("username")}</Typography.Text>
        <Controller
          name={`username`}
          control={control}
          render={({ field }) => (
            <Input onChange={field.onChange} value={field.value} />
          )}
        />
        <Typography.Text>{t("password")}</Typography.Text>
        <Controller
          name={`password`}
          control={control}
          render={({ field }) => (
            <Input onChange={field.onChange} value={field.value} />
          )}
        />
        <Button
          className="login-button"
          type="primary"
          onClick={handleSubmit(login)}
        >
          {t("login")}
        </Button>
      </Space>
    </Card>
  );
};

export default Login;
