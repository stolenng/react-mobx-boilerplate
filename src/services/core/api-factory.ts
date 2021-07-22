import HttpService from "./http-service";
import UserService from "../entities/user-service";
import CubeService from "../entities/cube-service";

const ApiList = [
  {
    variableName: "userService",
    classEntity: UserService,
    route: UserService.route,
  },
  {
    variableName: "cubeService",
    classEntity: CubeService,
    route: CubeService.route,
  },
];

export interface ApiFactoryParams {
  httpService: HttpService;
}

// declaration merging with class
interface ApiFactory {
  userService: UserService;
  cubeService: CubeService;
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
