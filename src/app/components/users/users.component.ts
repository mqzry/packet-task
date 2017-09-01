import {UserService} from '../../services/UserService';
import {Component} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  selectedUser: User;
  users: User[];

  constructor(private userService: UserService) {
  }

  private setUsers(users: User[]): void {
    this.users = users;
  }

  getUsers(): void {
    this.userService.getAll().then(users => this.setUsers(users));
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
