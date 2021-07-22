import BaseEntityService from "../core/base-entity-service";
import CredentialsStorage, {
  StorageItems,
} from "../core/credentials-storage-service";

export default class AuthService extends BaseEntityService {
  // TODO: change this to your route in server
  static route = "auth";
  private storage: CredentialsStorage = new CredentialsStorage();

  storeCredentials(token: string) {
    this.storage.setItem(StorageItems.TOKEN, token);
  }

  clearCredentials() {
    this.storage.clearItem(StorageItems.TOKEN);
  }

  getCredentials(item: StorageItems) {
    return this.storage.getItem(item);
  }

  // TODO: Replace any here with your types in the below requests :)
  async loginWithToken(token: string) {
    this.httpService.setToken(token);

    const response = await this.httpService.post<any, any>(
      `${this.path}/login`
    );

    return response.data;
  }

  async login(email: string, password: string): Promise<any> {
    const response = await this.httpService.post<any, any>(
      `${this.path}/login`,
      { username: email, password }
    );

    return response.data;
  }

  async register(email: string, password: string): Promise<any> {
    const response = await this.httpService.post<any, any>(
      `${this.path}/register`,
      { username: email, password }
    );

    return response.data;
  }
}
