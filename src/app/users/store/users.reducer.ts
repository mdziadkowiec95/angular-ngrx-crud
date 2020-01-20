import * as UsersActions from "./users.actions";
import { on, createReducer, Action } from "@ngrx/store";

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false
};

const scoreboardReducer = createReducer(
  initialState,
  on(UsersActions.testStore, state => ({ ...state, isLoading: true }))
);

export function reducer(state: State | undefined, action: Action) {
  return scoreboardReducer(state, action);
}
