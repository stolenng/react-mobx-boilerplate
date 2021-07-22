import { action, makeObservable, observable, runInAction, toJS } from "mobx";
import { getEnv } from "../../../helpers/mobx-easy-wrapper";

export interface TodoProps {
  id: number;
  text: string;
  isDone: boolean;
}

export default class Todo {
  id: number;

  @observable text: string = "";
  @observable isDone: boolean = false;

  constructor(props: TodoProps) {
    Object.assign(this, props);
    makeObservable(this);
  }

  @action
  toggleIsDone = () => {
    this.isDone = !this.isDone;
  };

  updateText = async (text: string) => {
    const { apiFactory } = getEnv();

    await apiFactory.todosService.update(this.id, this.toJSON());

    runInAction(() => {
      this.text = text;
    });
  };

  toJSON() {
    return toJS(this);
  }
}
