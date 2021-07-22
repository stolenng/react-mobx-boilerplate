import { action, computed, makeObservable, observable } from "mobx";
import { translationKey } from "../../services/translation-service";
import { getEnv } from "../../helpers/mobx-easy-wrapper";

export enum Languages {
  Hebrew = "he",
  English = "en",
}

class UiStore {
  @observable
  currentLanguage: Languages;

  initialUrl?: string;

  constructor() {
    this.currentLanguage =
      (localStorage.getItem(translationKey) as Languages) || Languages.English;

    this.initialUrl = window.location.hash.replace("#", "");

    makeObservable(this);
  }

  saveToken(token: string) {
    const { apiFactory } = getEnv();

    apiFactory.saveToken(token);
  }

  @action
  updateLanguage(language: Languages) {
    this.currentLanguage = language;

    const { translationService } = getEnv();

    translationService.updateLang(language);
  }

  @computed
  get direction() {
    return this.currentLanguage === Languages.Hebrew ? "rtl" : "ltr";
  }
}

export default UiStore;
