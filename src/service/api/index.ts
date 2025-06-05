import { HttpClient } from "./httpClient";

export class ServiceContainer {
  private static instance: ServiceContainer;
  private httpClient: HttpClient;
 
  private constructor() {
    this.httpClient = new HttpClient(import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:3001');
  }

  static getInstance(): ServiceContainer {
    if (!this.instance) {
      this.instance = new ServiceContainer();
    }
    return this.instance;
  }

  setAuthToken(token: string) {
    this.httpClient.setAuthToken(token);
  }

  removeAuthToken() {
    this.httpClient.removeAuthToken();
  }
}

export const serviceContainer = ServiceContainer.getInstance();
