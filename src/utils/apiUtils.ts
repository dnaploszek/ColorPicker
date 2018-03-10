import { OutgoingHttpHeaders } from 'http';

const enum HttpMethod {
  get = 'GET',
}

const enum HttpHeaders {
  ContentType = 'Content-Type',
}

const enum ContentTypes {
  applicationJson = 'application/json',
}

export default class ApiUtils {
  public static async get(path: string) {
    return this.invokeRestMethod(HttpMethod.get, path, this.getHeaders());
  }

  public static mock(ret: any): Promise<any> {
    return new Promise((resolve: Function) => {
      setTimeout(
        () => {
          resolve(ret);
        },
        200
      );
    });
  }

  private static getHeaders() {
    return {
      [HttpHeaders.ContentType]: ContentTypes.applicationJson,
    };
  }

  private static async invokeRestMethod(type: HttpMethod, path: string, headers: OutgoingHttpHeaders) {
    try {
      const response = await fetch(path, {
        method: type,
        headers
      } as RequestInit);

      return await response.json();
    } catch (error) {
      // TODO: handle different error types.
      throw new Error(error.message);
    }
  }
}