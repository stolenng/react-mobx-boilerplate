import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";
import { Button, Input, Row } from "antd";
import { useTranslation } from "react-i18next";

export const TodoForm = () => {
  const { t } = useTranslation();
  const [newTodo, setTodo] = useState("");
  const {
    dataStore: { todosStore },
  } = useStore();

  const addTodo = async () => {
    await todosStore.createTodo(newTodo);
    setTodo("");
  };

  return (
    <Row className="todo-new">
      <Input
        className="todo-input"
        type="text"
        value={newTodo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="primary" onClick={addTodo}>
        {t("add")}
      </Button>
    </Row>
  );
};
