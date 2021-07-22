import React, { useState } from "react";
import { useStore } from "../../helpers/use-store";

export const TodoForm = () => {
  const [newTodo, setTodo] = useState("");
  const {
    dataStore: { todosStore },
  } = useStore();

  const addTodo = async () => {
    await todosStore.createTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};
