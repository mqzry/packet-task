import {Component, Input} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'userDetail',
  templateUrl: './user.detail.component.html',
  styleUrls: ['./user.detail.component.css']
})
export class UserDetailComponent {
  @Input() user: User;
}
