import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from 'src/modules/users/common/users.model';
import { UsersFacade } from 'src/modules/users/facades/users.facade';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {
  private subs = new Subscription();

  users: Users = [];

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit() {
    this.subscribeData();
  }

  subscribeData() {
    this.subs.add(this.usersFacade.users$.subscribe(res => {
      this.users = res;
    }));
    this.usersFacade.getUsers();
  }

  refresh() {
    this.usersFacade.getUsers(true)
  }

}
