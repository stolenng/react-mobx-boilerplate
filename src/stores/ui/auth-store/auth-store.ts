import { action, computed, makeObservable, observable } from "mobx";
import { getEnv, getRoot } from "../../../helpers/mobx-easy-wrapper";
import User from "../../data/models/user";
import { StorageItems } from "../../../services/core/credentials-storage-service";

export enum AuthState {
  Authenticating = "authenticating",
  LoggedIn = "loggedIn",
  LoggedOut = "loggedOut",
}

class AuthStore {
  @observable
  currentUser: User | null;
  @observable
  authState: AuthState = AuthState.LoggedOut;

  constructor() {
    makeObservable(this);
  }

  async loginIfTokenExists() {
    const token = getEnv().apiFactory.authService.getCredentials(
      StorageItems.TOKEN
    );

    if (token) {
      await this.loginWithToken(token);
    }
  }

  @action
  logout = () => {
    const { apiFactory } = getEnv();

    apiFactory.authService.clearCredentials();

    this.setUser(null);
    this.setAuthState(AuthState.LoggedOut);
    apiFactory.setToken("");
  };

  @computed
  get user() {
    return this.currentUser;
  }

  @action
  setAuthState(authState: AuthState) {
    this.authState = authState;
  }

  @action
  //TODO: change to user correct type returned from your API
  setUser(user: any) {
    if (!user) {
      this.currentUser = null;
    } else {
      this.currentUser = new User(user);
    }
  }

  private async afterLoginEvents(token: string, user: any) {
    const { apiFactory } = getEnv();
    const { dataStore } = getRoot();

    this.setAuthState(AuthState.LoggedIn);
    this.setUser(user);

    apiFactory.setToken(token || user.token);

    apiFactory.authService.storeCredentials(token);

    // If you want to call events after related to the data after login
    await dataStore.afterLoginEvents();
  }

  loginWithToken = async (token: string) => {
    try {
      this.setAuthState(AuthState.Authenticating);

      const result = await getEnv().apiFactory.authService.loginWithToken(
        token
      );

      await this.afterLoginEvents(result.token, result);
    } catch (e) {
      this.setAuthState(AuthState.LoggedOut);
      console.log(e, "Failed to login from token");
    }
  };

  login = async (email: string, password: string): Promise<any> => {
    try {
      this.setAuthState(AuthState.Authenticating);

      const result = await getEnv().apiFactory.authService.login(
        email,
        password
      );

      await this.afterLoginEvents(result.token, result);
    } catch (e) {
      this.setAuthState(AuthState.LoggedOut);
      console.log(e, "Failed to login");
    }
  };

  register = async (email: string, password: string): Promise<any> => {
    try {
      this.setAuthState(AuthState.Authenticating);
      const result = await getEnv().apiFactory.authService.register(
        email,
        password
      );

      await this.afterLoginEvents(result.token, result);
    } catch (e) {
      this.setAuthState(AuthState.LoggedOut);
      console.log(e, "Failed to register");
    }
  };
}

export default AuthStore;
