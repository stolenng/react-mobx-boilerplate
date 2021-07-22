import { wrapRoot } from "mobx-easy";
import RootStore from "../stores/root-store";
import TranslationService from "../services/translation-service";
import HttpService from "../services/core/http-service";
import ApiFactory from "../services/core/api-factory";

export interface Environment {
  api_end_point: string;
  auth: {
    domain: string;
    clientId: string;
    audience: string;
  };
}

export interface RootEnv {
  translationService: TranslationService;
  envConfig: Environment;
  apiFactory: ApiFactory;
}

export interface CreateStoreResult {
  rootStore: RootStore;
  env: RootEnv;
}

export interface CreateStoreOptions {
  envConfig: Environment;
}

const createStore = ({ envConfig }: CreateStoreOptions): CreateStoreResult => {
  const httpService = new HttpService({ baseURL: envConfig.api_end_point });
  const apiFactory = new ApiFactory({ httpService });

  const env: RootEnv = {
    apiFactory,
    translationService: new TranslationService(),
    envConfig,
  };

  const rootStore = wrapRoot({ RootStore: RootStore, env });

  return {
    rootStore,
    env,
  };
};

export default createStore;
