import React, { useState } from "react";
import Todo from "../../stores/data/todos-store/todo";
import { useStore } from "../../helpers/use-store";

interface Props {
  todo: Todo;
}

const TodoComponent = ({ todo }: Props) => {
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
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={saveText}>save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            onChange={todo.toggleIsDone}
            defaultChecked={todo.isDone}
          ></input>
          <button onClick={() => setEdit(true)}>edit</button>
          <button onClick={() => todosStore.deleteTodo(todo.id)}>X</button>
        </div>
      )}
    </div>
  );
};

export default TodoComponent;
