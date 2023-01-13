import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './users.reducer';

const getState = createFeatureSelector<fromReducer.State>(
    fromReducer.featureKey
);

const getPageState = createSelector(getState, (state) => state);

// state
export const getIsLoading = createSelector(getPageState, ({ isLoading }) => isLoading);
export const getIsSuccesful = createSelector(getPageState, ({ isSuccessful }) => isSuccessful);
export const getHasError = createSelector(getPageState, ({ hasError }) => hasError);
export const getErrors = createSelector(getPageState, ({ errors }) => errors);
// data
export const users = createSelector(getPageState, ({ users }) => users);
export const selectedUser = createSelector(getPageState, ({ selectedUser }) => selectedUser);
