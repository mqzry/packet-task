import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from './BaseService';
import {Album} from '../models/Album';
import {User} from '../models/User';

@Injectable()
export class AlbumService extends BaseService<Album> {
  constructor(http: Http) {
    super(http, '/albums');
  }

  getUrlByUser(user: User): string {
    return this.getUrl() + '?' + 'userid=' + user.id;
  }

  getByUser(user: User): Promise<Album[]> {
    return this.http.get(this.getUrlByUser(user)).toPromise().then(response => this.parseCollection(response))
      .catch(this.handleError);
  }
}
