import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Http} from '@angular/http';
import {BaseService} from './BaseService';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(http: Http) {
    super(http, '/users');
  }
}
