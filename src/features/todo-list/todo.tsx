import React, { useState } from "react";
import Todo from "../../stores/data/todos-store/todo";
import { useStore } from "../../helpers/use-store";
import { Button, Checkbox, Input, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

interface Props {
  todo: Todo;
}

const TodoComponent = ({ todo }: Props) => {
  const { t } = useTranslation();
  const {
    dataStore: { todosStore },
  } = useStore();
  const [newText, setText] = useState("");
  const [isEditing, setEdit] = useState(false);

  const saveText = () => {
    todo.updateText(newText);
    setEdit(false);
    setText("");
  };

  return (
    <Row className="todo-item" justify="center">
      {isEditing ? (
        <div>
          <Input
            className="todo-save-input"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={saveText}>{t("save")}</Button>
        </div>
      ) : (
        <div className="todo-block">
          <Checkbox checked={todo.isDone} onChange={todo.toggleIsDone}>
            {todo.text}
          </Checkbox>
          <span className="todo-actions">
            <Typography.Text type="warning" onClick={() => setEdit(true)}>
              {t("edit")}
            </Typography.Text>
            <Typography.Text
              type="danger"
              onClick={() => todosStore.deleteTodo(todo.id)}
            >
              {t("delete")}
            </Typography.Text>
          </span>
        </div>
      )}
    </Row>
  );
};

export default TodoComponent;
