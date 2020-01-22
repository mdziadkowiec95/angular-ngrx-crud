import * as UsersActions from './users.actions';
import { on, createReducer, Action } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export interface State {
  isLoading: boolean;
  isError: boolean;
  userList: User[];
  user: User;
}

export const initialState: State = {
  isLoading: false,
  isError: false,
  userList: [],
  user: null
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, state => ({ ...state, isLoading: true })),
  on(UsersActions.loadUsersSuccess, (state, { userList }) => ({ ...state, userList, isLoading: false })),
  on(UsersActions.loadUsersError, state => ({ ...state, userList: [], isError: true, isLoading: false })),
  on(UsersActions.loadUserDetails, state => ({ ...state, isLoading: true })),
  on(UsersActions.loadUserDetailsSuccess, (state, { user }) => ({ ...state, user, isLoading: false })),
  on(UsersActions.loadUserDetailsError, state => ({ ...state, user: null, isError: false, isLoading: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
