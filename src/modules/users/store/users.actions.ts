import { createAction, props } from '@ngrx/store';
import { User, Users } from '../common/users.model';

// whole action types enum
export const enum ActionTypes {

    GET_USERS = '[User] get Users',
    GET_USERS_SUCCESS = '[User] get Users Success',
    GET_USERS_FAIL = '[User] get Users Fail',

    CREATE_USER = '[User] create User',
    CREATE_USER_SUCCESS = '[User] create User Success',
    CREATE_USER_FAIL = '[User] create User Fail',

    UPDATE_USER = '[User] update User',
    UPDATE_USER_SUCCESS = '[User] update User Success',
    UPDATE_USER_FAIL = '[User] update User Fail',

    DELETE_USER = '[User] delete User',
    DELETE_USER_SUCCESS = '[User] delete User Success',
    DELETE_USER_FAIL = '[User] delete User Fail',

    SET_CURRENT_USER = '[User] set current user',
}

export const getUsers = createAction(
    ActionTypes.GET_USERS,
    props<{ force: boolean }>()
);
export const getUsersSuccess = createAction(
    ActionTypes.GET_USERS_SUCCESS,
    props<{ users: Users }>()
);
export const getUsersFail = createAction(
    ActionTypes.GET_USERS_FAIL,
    props<{ errors: any }>()
);

export const createUser = createAction(
    ActionTypes.CREATE_USER,
    props<{ user: User }>()
);
export const createUserSuccess = createAction(
    ActionTypes.CREATE_USER_SUCCESS,
    props<{ user: User }>()
);
export const createUserFail = createAction(
    ActionTypes.CREATE_USER_FAIL,
    props<{ errors: any }>()
);

export const updateUser = createAction(
    ActionTypes.UPDATE_USER,
    props<{ user: User }>()
);
export const updateUserSuccess = createAction(
    ActionTypes.UPDATE_USER_SUCCESS,
    props<{ user: User }>()
);
export const updateUserFail = createAction(
    ActionTypes.UPDATE_USER_FAIL,
    props<{ errors: any }>()
);

export const deleteUser = createAction(
    ActionTypes.DELETE_USER,
    props<{ id: string }>()
);
export const deleteUserSuccess = createAction(
    ActionTypes.DELETE_USER_SUCCESS,
    props<{ id: string }>()
);
export const deleteUserFail = createAction(
    ActionTypes.DELETE_USER_FAIL,
    props<{ errors: any }>()
);

export const setCurrentUser = createAction(
    ActionTypes.SET_CURRENT_USER,
    props<{ user: User }>()
);
