import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "src/app/shared/models/user.model";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import * as UsersActions from "../store/users.actions";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(data => {
      this.users = data;

      this.store.dispatch(UsersActions.testStore());
    });
  }
}
