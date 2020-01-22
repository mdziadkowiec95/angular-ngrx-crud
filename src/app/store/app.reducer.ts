import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromUsers from '../users/store/users.reducer';
export interface AppState {
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
