import HttpService from "./http-service";
import AuthService from "../api/auth-service";
import TodosService from "../api/todos-service";

const ApiList = [
  {
    variableName: "todosService",
    classEntity: TodosService,
    route: TodosService.route,
  },
  {
    variableName: "authService",
    classEntity: AuthService,
    route: AuthService.route,
  },
];

export interface ApiFactoryParams {
  httpService: HttpService;
}

// declaration merging with class
interface ApiFactory {
  todosService: TodosService;
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
