import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction('[Users] Load Users Success', props<{ userList: User[]}>());
export const loadUsersError = createAction('[Users] Load Users Error');

export const loadUserDetails = createAction('[Users] Load User Details', props<{ id: number }>());
export const loadUserDetailsSuccess = createAction('[Users] Load User Details Success', props<{ user: User}>());
export const loadUserDetailsError = createAction('[Users] Load User Details Error');
