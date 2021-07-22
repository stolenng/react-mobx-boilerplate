import HttpService from "./http-service";
import AuthService from "../api/auth-service";
import ExampleCrudService from "../api/example-crud-service";

const ApiList = [
  {
    variableName: "authService",
    classEntity: AuthService,
    route: AuthService.route,
  },
  {
    variableName: "cubeService",
    classEntity: ExampleCrudService,
    route: ExampleCrudService.route,
  },
];

export interface ApiFactoryParams {
  httpService: HttpService;
}

// declaration merging with class
interface ApiFactory {
  exampleCrudService: ExampleCrudService;
  authService: AuthService;
}

class ApiFactory {
  private httpService: HttpService;

  [index: string]: any;

  constructor({ httpService }: ApiFactoryParams) {
    this.httpService = httpService;

    ApiList.forEach((api) => {
      this[api.variableName] = new api.classEntity({
        httpService,
        route: api.route,
      });
    });
  }

  saveToken(token: string) {
    this.httpService.setToken(token);
  }
}

export default ApiFactory;
