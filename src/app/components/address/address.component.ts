import {Component, Input} from '@angular/core';
import {User} from '../../models/User';
import {Address} from '../../models/Address';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() address: Address;
}
