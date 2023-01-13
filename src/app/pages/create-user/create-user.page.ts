import { Component, OnInit } from '@angular/core';
import { UsersFacade } from 'src/modules/users/facades/users.facade';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  constructor(private usersFacade: UsersFacade) { }

  ngOnInit() {
  }

}
