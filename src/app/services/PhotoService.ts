import {Injectable} from '@angular/core';
import {Photo} from '../models/Photo';
import {Http} from '@angular/http';
import {BaseService} from './BaseService';

@Injectable()
export class PhotoService extends BaseService<Photo> {
  constructor(http: Http) {
    super(http, '/photos');
  }
}
