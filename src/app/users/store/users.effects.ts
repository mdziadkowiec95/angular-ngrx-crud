import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as UsersActions from './users.actions';
import { UsersService } from '../users.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class UsersEffects {
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.loadUsers),
        mergeMap(() => this.usersService.getAllUsers().pipe(
            map(userList => UsersActions.loadUsersSuccess({ userList })),
            catchError(() => UsersActions.loadUsersError)
        ))
    ));

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(UsersActions.loadUserDetails),
        switchMap((action) => {
            return this.usersService.getUserById(action.id).pipe(
                map(user => UsersActions.loadUserDetailsSuccess({ user })),
                catchError(() => UsersActions.loadUserDetailsError)
            )
        })
    ));


    // loadUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(UsersActions.loadUserDetails),
    //     switchMap((action) => this.usersService.getUserById(123).pipe(
    //         map(user => UsersActions.loadUserDetailsSuccess({ user })),
    //         catchError(() => UsersActions.loadUserDetailsError)
    //     ))
    // ));

    constructor(private actions$: Actions, private usersService: UsersService) { }
}
