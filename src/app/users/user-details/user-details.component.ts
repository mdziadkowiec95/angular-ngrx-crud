import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as UsersActions from '../store/users.actions';
import * as UsersSelectors from '../store/users.selectors';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  isLoading = true;
  isError = false;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.pipe(
      map((state) => UsersSelectors.selectUser(state)))
        .subscribe(userData => {
          this.user = userData.user;
          this.isLoading = userData.isLoading;
          this.isError = userData.isError;
      });

    this.route.params.subscribe((params: Params) => {
      this.isLoading = true;
      this.getUserDetailsById(+params.id);
    });
  }

  private getUserDetailsById(id: number): void {
    this.store.dispatch(UsersActions.loadUserDetails({ id }));
  }
}
