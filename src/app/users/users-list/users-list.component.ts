import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import { User } from "src/app/shared/models/user.model";
import { Store, select } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";
import * as UsersActions from "../store/users.actions";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { format } from 'url';
import * as UsersSelectors from '../store/users.selectors';

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users: any[];
  isLoading: boolean;
  isError: boolean;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.loadUsers();

    this.store.pipe(
      map(state => UsersSelectors.selectUsersForCard(state)))
        .subscribe(usersState => {
          this.users = usersState.userList;
          this.isLoading = usersState.isLoading;
          this.isError = usersState.isError;
        });
  }

  private loadUsers(): void {
    this.store.dispatch(UsersActions.loadUsers());
  }
}
