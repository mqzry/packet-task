import {Address} from './Address';
import {Company} from './Company';

export class User {
  constructor(public id: Number, public name: String, public username: String, public email: String, public address: Address
    , public phone: String, public website: String, public company: Company) {
  }
}
