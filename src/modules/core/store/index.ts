import { ActionReducerMap, combineReducers, MetaReducer } from '@ngrx/store';
import * as fromUsers from 'src/modules/users/store/users.reducer';

// app state should not include all reducer at once
export interface AppState {
    [fromUsers.featureKey]: fromUsers.State;
}

export const reducers: ActionReducerMap<AppState> = {
    [fromUsers.featureKey]: fromUsers.reducer,
};

// Combine whole app reducers
export const appReducer = combineReducers({ ...reducers })
export const clearState = (appReducer: any) => {
    return (state: any, action: any) => {
        return appReducer(
            {
                ...state,
                [fromUsers.featureKey]: fromUsers.initialState,
            }
            , action)
    }
}


export const metaReducers: MetaReducer<AppState>[] = [clearState];
