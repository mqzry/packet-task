import {Injectable} from '@angular/core';
import {Photo} from '../models/Photo';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService<T> {
  rootUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: Http, private path: string) {
  }

  getUrl(): string {
    return this.rootUrl + this.path;
  }

  parse(response: Response): T {
    return response.json() as T;
  }

  parseCollection(response: Response): T[] {
    const responsePayload = response.json();
    if (Array.isArray(responsePayload)) {
      return responsePayload.map(item => item as T);
    }

    return [];
  }

  getAll(): Promise<T[]> {
    return this.http.get(this.getUrl()).toPromise().then(response => this.parseCollection(response))
      .catch(this.handleError);
  }

  get(id: string): Promise<T> {
    return this.http.get(this.getUrl()).toPromise().then(response => this.parse(response))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
