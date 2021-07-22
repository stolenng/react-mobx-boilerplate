import HttpService from "./http-service";

export interface BaseResponse<T> {
  data: T;
}

interface BaseHttpServiceParams {
  route: string;
  httpService: HttpService;
}

class BaseEntityService {
  static route: string = "route name not implemented";

  protected httpService: HttpService;
  private readonly route: string;

  constructor({ route, httpService }: BaseHttpServiceParams) {
    this.route = route;
    this.httpService = httpService;
  }

  protected get path() {
    return `${this.route}`;
  }
}

export default BaseEntityService;
