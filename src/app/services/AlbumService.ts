import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {BaseService} from './BaseService';
import {Album} from '../models/Album';

@Injectable()
export class AlbumService extends BaseService<Album> {
  constructor(http: Http) {
    super(http, '/albums');
  }
}
