import { GitUsersState } from './reducer';
import { createSelector } from 'reselect';

const getState = (state: any): GitUsersState => state.gitUsersStore;

export const getUsers = createSelector(
  [getState],
  (state) => state.users,
);

export const isUsersFetching = createSelector(
  [getState],
  (state) => state.fetchingUsers,
);
