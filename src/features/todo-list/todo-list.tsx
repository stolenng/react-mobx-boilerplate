import React, { useEffect } from "react";
import TodoComponent from "./todo";
import { observer } from "mobx-react";
import { useStore } from "../../helpers/use-store";
import { TodoForm } from "./todo-form";

const TodoList = () => {
  const {
    dataStore: { todosStore },
  } = useStore();

  useEffect(() => {
    todosStore.getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="todo-list">
      <TodoForm />
      <div className="open-todos">
        <span>Open Todos</span>
        {todosStore.openTodos.map((todo) => (
          <TodoComponent key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
      <div className="finished-todos">
        <span>Finished Todos</span>
        {todosStore.finishedTodos.map((todo) => (
          <TodoComponent key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default observer(TodoList);
