import BaseService, { BaseResponse } from "./base-service";

export default class CrudService extends BaseService {
  async create<D, R>(data: D) {
    const response = await this.httpService.post<D, BaseResponse<R>>(
      `${this.path}`,
      data
    );

    return response.data;
  }

  async getAll<R>() {
    const response = await this.httpService.get<BaseResponse<R>>(
      `${this.path}`
    );

    return response.data;
  }

  async get<R>(id: string) {
    const response = await this.httpService.get<BaseResponse<R>>(
      `${this.path}/${id}`
    );

    return response.data;
  }

  async update<D, R>(id: string | number, data: D) {
    const response = await this.httpService.put<D, BaseResponse<R>>(
      `${this.path}/${id}`,
      data
    );

    return response.data;
  }

  async delete<R>(id: string | number) {
    const response = await this.httpService.delete<BaseResponse<R>>(
      `${this.path}/${id}`
    );

    return response.data;
  }
}
