import {Location} from './Location';

export class Address {
  constructor(public street: String, public suite: String, public city: String, public zipCode: String, public geo: Location) {
  }
}
