import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as fromActions from 'src/modules/users/store/users.actions';
import * as fromReducer from 'src/modules/users/store/users.reducer';
import * as fromSelector from 'src/modules/users/store/users.selectors';
import { User, Users } from '../common/users.model';

@Injectable()
export class UsersFacade {
    constructor(
        private store: Store<fromReducer.State>,
        private updates$: Actions
    ) { }

    getUsers(force = false) {
        return this.store.dispatch(fromActions.getUsers({ force }));
    }

    createUser(user: User) {
        return this.store.dispatch(fromActions.createUser({ user }));
    }
    updateUser(user: User) {
        return this.store.dispatch(fromActions.updateUser({ user }));
    }
    deleteUser(id: string) {
        return this.store.dispatch(fromActions.deleteUser({ id }));
    }
    get onCreateUserSuccess$() {
        return this.updates$.pipe(ofType(fromActions.createUserSuccess));
    }
    get onUpdateUserSuccess$() {
        return this.updates$.pipe(ofType(fromActions.updateUserSuccess));
    }
    get deleteUserSuccess$() {
        return this.updates$.pipe(ofType(fromActions.deleteUserSuccess));
    }
    get users$(): Observable<Users> {
        return this.store.select(fromSelector.users);
    }
    get selectedUser$(): Observable<User> {
        return this.store.select(fromSelector.selectedUser).pipe(filter(x => !!x));
    }
    get isLoading$() {
        return this.store.select(fromSelector.getIsLoading);
    }
    get hasError$() {
        return this.store.select(fromSelector.getHasError).pipe(filter((x) => x));
    }
    get error$() {
        return this.store.select(fromSelector.getErrors).pipe(filter((x) => x));
    }
}
