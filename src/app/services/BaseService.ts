import {Injectable} from '@angular/core';
import {Photo} from '../models/Photo';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService<T> {

  constructor(private http: Http, private path: string) {
  }

  getAll(): Promise<T[]> {
    return this.http.get(this.path).toPromise().then(response => response.json().data as T)
      .catch(this.handleError);
  }

  get(id: string): Promise<T> {
    return this.http.get(this.path).toPromise().then(response => response.json().data as T)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
