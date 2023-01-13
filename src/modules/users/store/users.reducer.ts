import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { User, Users } from '../common/users.model';

import * as fromActions from './users.actions';

export const featureKey = 'users';

export interface State {
    isLoading: boolean;
    isSuccessful: boolean;
    hasError: boolean;
    errors: any;
    users: Users;
    selectedUser: User;
}
export const initialState: State = {
    isLoading: false,
    isSuccessful: false,
    hasError: false,
    errors: undefined,
    users: [],
    selectedUser: {
        id: undefined,
        photo: '',
        fullName: '',
        jobPosition: '',
        salary: '',
        status: '',
        hireDate: '',
        beneficiary: undefined
    },
};

const usersReducer: ActionReducer<State> = createReducer(
    initialState,
    on(
        fromActions.getUsers,
        fromActions.createUser,
        fromActions.updateUser,
        fromActions.deleteUser,
        (state): State => ({
            ...state,
            isLoading: true,
            isSuccessful: false,
            hasError: false,
            errors: null,
        })
    ),
    on(
        fromActions.getUsersSuccess,
        (state, action): State => ({
            ...state,
            isLoading: false,
            isSuccessful: true,
            hasError: false,
            users: [...action.users]
        })
    ),
    on(
        fromActions.updateUserSuccess,
        fromActions.createUserSuccess,
        (state, action): State => ({
            ...state,
            isLoading: false,
            isSuccessful: true,
            hasError: false,
            users: [...state.users.filter(user => user.id !== action.user.id), action.user]
        })
    ),
    on(
        fromActions.deleteUserSuccess,
        (state, action): State => ({
            ...state,
            isLoading: true,
            isSuccessful: false,
            hasError: false,
            errors: null,
            users: [...state.users.filter(user => user.id !== action.id)]
        })
    ),
    on(
        fromActions.setCurrentUser,
        (state, action): State => ({
            ...state,
            selectedUser: { ...action.user },
        })
    ),
    on(
        fromActions.getUsersFail,
        fromActions.createUserFail,
        fromActions.updateUserFail,
        fromActions.deleteUserFail,
        (state, action): State => ({
            ...state,
            isLoading: false,
            isSuccessful: false,
            hasError: true,
            errors: action.errors,
        })
    ),
);

export function reducer(state: State | undefined, action: Action) {
    return usersReducer(state, action);
}
