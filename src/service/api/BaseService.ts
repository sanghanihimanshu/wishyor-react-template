import type { IHttpClient } from "@/service/api/interfaces/base";
import { ApiError } from "@/service/api/errors/ApiError";

export abstract class BaseService<T, TCreate, TUpdate> {
  protected httpClient: IHttpClient;
  protected basePath: string;

  constructor(httpClient: IHttpClient, basePath: string) {
    this.httpClient = httpClient;
    this.basePath = basePath;
  }

  async getAll(params?: any): Promise<Array<T>> {
    try {
      const response = await this.httpClient.get<{ data: Array<T> }>(
        this.basePath,
        { params }
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error, 'Failed to fetch items');
    }
  }

  async getById(id: string): Promise<T> {
    try {
      const response = await this.httpClient.get<{ data: T }>(
        `${this.basePath}/${id}`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error, `Failed to fetch item with id: ${id}`);
    }
  }

  async create(data: TCreate): Promise<T> {
    try {
      const response = await this.httpClient.post<{ data: T }>(
        this.basePath,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error, 'Failed to create item');
    }
  }

  async update(id: string, data: TUpdate): Promise<T> {
    try {
      const response = await this.httpClient.patch<{ data: T }>(
        `${this.basePath}/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error, `Failed to update item with id: ${id}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.httpClient.delete(`${this.basePath}/${id}`);
    } catch (error) {
      throw this.handleError(error, `Failed to delete item with id: ${id}`);
    }
  }

  protected handleError(error: any, defaultMessage: string): Error {
    if (ApiError.isApiError(error)) {
      return error;
    }
    return new Error(defaultMessage);
  }
}
