import type { IHttpClient, RequestConfig  } from "@/service/api/interfaces/base";
import { ApiError } from "@/service/api/errors/ApiError";
import { ErrorResponseSchema } from "@/types";

export class HttpClient implements IHttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  removeAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }

  private async request<T>(
    method: string,
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    const fullUrl = `${this.baseURL}${url}`;
    
    const headers = {
      ...this.defaultHeaders,
      ...config?.headers,
    };

    const requestOptions: RequestInit = {
      method,
      headers,
      signal: config?.signal,
    };

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      requestOptions.body = JSON.stringify(data);
    }

    // Add query params
    const searchParams = new URLSearchParams();
    if (config?.params) {
      Object.keys(config.params).forEach(key => {
        if (config.params![key] !== undefined && config.params![key] !== null) {
          searchParams.append(key, String(config.params![key]));
        }
      });
    }

    const finalUrl = searchParams.toString() 
      ? `${fullUrl}?${searchParams.toString()}` 
      : fullUrl;

    try {
      const response = await fetch(finalUrl, requestOptions);
      
      if (!response.ok) {
        const errorData = await response.json();
        const validatedError = ErrorResponseSchema.parse(errorData);
        throw new ApiError(
          validatedError.message || 'Request failed',
          response.status,
          validatedError
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error occurred', 0, error);
    }
  }

  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.request<T>('GET', url, undefined, config);
  }

  async post<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>('POST', url, data, config);
  }

  async put<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>('PUT', url, data, config);
  }

  async patch<T>(url: string, data?: any, config?: RequestConfig): Promise<T> {
    return this.request<T>('PATCH', url, data, config);
  }

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return this.request<T>('DELETE', url, undefined, config);
  }
}
