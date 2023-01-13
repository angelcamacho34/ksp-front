import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { UsersRepository } from '../repository/users.repository';
import * as actions from './users.actions';
import * as fromReducer from './users.reducer';
import * as fromSelector from './users.selectors';

@Injectable()
export class UsersEffects {

    getUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.getUsers),
            withLatestFrom(
                this.store$.pipe(select(fromSelector.users))
            ),
            switchMap(([request, users]) => {
                if (users.length > 0 && !request.force) {
                    return of(actions.getUsersSuccess({ users }));
                }
                return this.repository.getUsers().pipe(
                    map((response) => {
                        return actions.getUsersSuccess({
                            users: [...response],
                        });
                    }
                    ),
                    catchError((errors) => {
                        return of(actions.getUsersFail({ errors }));
                    })
                );
            })
        )
    );

    createUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.createUser),
            exhaustMap((request: any) => {
                return this.repository.upsertUser(request.user).pipe(
                    map((response) => {
                        return actions.createUserSuccess({
                            user: response,
                        });
                    }
                    ),
                    catchError((errors) => {
                        return of(actions.createUserFail({ errors }));
                    })
                );
            })
        )
    );

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.deleteUser),
            exhaustMap((request: any) => {
                return this.repository.deleteUSer(request.id).pipe(
                    map((response) => {
                        return actions.deleteUserSuccess({
                            id: request.id,
                        });
                    }
                    ),
                    catchError((errors) => {
                        return of(actions.deleteUserFail({ errors }));
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private repository: UsersRepository,
        private store$: Store<fromReducer.State>
    ) { }
}
