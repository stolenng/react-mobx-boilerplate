import CrudService from "../core/crud-service";
import { BaseResponse } from "../core/base-entity-service";

export default class ExampleCrudService extends CrudService {
  static route = "example";
}
