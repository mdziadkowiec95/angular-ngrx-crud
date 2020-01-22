import { AppState } from 'src/app/store/app.reducer';
import { createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import { User } from 'src/app/shared/models/user.model';

export const selectUsers = (state: AppState) => state.users;

export const selectUserList = createSelector(
  selectUsers,
  (state: fromUsers.State) => state.userList
);

export const selectUsersForCard = createSelector(
  selectUsers,
  (state: fromUsers.State) => {
    const usersMap = state.userList.map(({ id, firstName, lastName, avatar }: User) => ({
        id,
        title: `${firstName} ${lastName}`,
        imgSrc: avatar,
    }));

    return {
      ...state,
      userList: usersMap
    };
  }
);

export const selectUser = createSelector(selectUsers, ({ user, isLoading, isError }: fromUsers.State) => ({ user, isLoading, isError }));
