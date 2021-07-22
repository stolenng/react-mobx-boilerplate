import UiStore from "./ui/ui-store";
import DataStore from "./data/data-store";

export default class RootStore {
  uiStore: UiStore = {} as UiStore;
  dataStore: DataStore = {} as DataStore;

  init() {
    this.uiStore = new UiStore();
    this.dataStore = new DataStore();
  }
}
