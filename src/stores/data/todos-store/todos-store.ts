import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import Todo, { TodoProps } from "./todo";
import { getEnv } from "../../../helpers/mobx-easy-wrapper";

export class TodosStore {
  @observable todoMap: Map<number, Todo> = new Map();

  constructor() {
    makeObservable(this);
  }

  async getAll() {
    const { apiFactory } = getEnv();

    const results = await apiFactory.todosService.getAll<TodoProps[]>();

    // runInAction here so we get only 1 update for all insertions :)
    runInAction(() => {
      results.forEach(this.addTodo);
    });
  }

  @computed
  get items() {
    return Array.from(this.todoMap.values());
  }

  createTodo = async (text: string) => {
    const { apiFactory } = getEnv();

    const result = await apiFactory.todosService.create<string, TodoProps>(
      text
    );

    this.addTodo(result);
  };

  @action
  addTodo = (todoProps: TodoProps) => {
    this.todoMap.set(todoProps.id, new Todo(todoProps));
  };

  deleteTodo = async (id: number) => {
    const { apiFactory } = getEnv();

    await apiFactory.todosService.delete(id);

    runInAction(() => {
      this.todoMap.delete(id);
    });
  };

  @computed
  get finishedTodos(): Todo[] {
    return this.items.filter((todo) => todo.isDone);
  }

  @computed
  get openTodos(): Todo[] {
    return this.items.filter((todo) => !todo.isDone);
  }
}
