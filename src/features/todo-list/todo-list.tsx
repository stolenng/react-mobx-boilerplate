import React, { useEffect } from "react";
import TodoComponent from "./todo";
import { observer } from "mobx-react";
import { useStore } from "../../hooks/use-store";
import { TodoForm } from "./todo-form";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const { t } = useTranslation();
  const {
    dataStore: { todosStore },
  } = useStore();

  useEffect(() => {
    todosStore.getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row className="todo-list">
      <Col span={24}>
        <Typography.Title>{t("todo_list")}</Typography.Title>
      </Col>
      <Col span={24}>
        <TodoForm />
      </Col>
      <Col span={12} className="open-todos">
        <Typography.Title level={3}>{t("open_todos")}</Typography.Title>
        {todosStore.openTodos.map((todo) => (
          <TodoComponent key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </Col>
      <Col span={12} className="finished-todos">
        <Typography.Title level={3}>{t("finished_todos")}</Typography.Title>
        {todosStore.finishedTodos.map((todo) => (
          <TodoComponent key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </Col>
    </Row>
  );
};

export default observer(TodoList);
