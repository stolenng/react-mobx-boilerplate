import { TodosStore } from "./todos-store/todos-store";

class DataStore {
  todosStore: TodosStore = new TodosStore();
  afterLoginEvents() {}
}

export default DataStore;
