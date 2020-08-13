import { Action } from 'types/store';
import * as TYPES from './constants';

export type GitUser = {
  login: string,
  avatar: string,
  site: string,
  repos_url: string,
  id: number
};

export type GitUsersState = Readonly<{
  users: GitUser[] | null,
  fetchingUsers: boolean,
  error: string,
}>;

export const initialState: GitUsersState = {
  users: null,
  fetchingUsers: false,
  error: "",
};

export default function gitUsersReducer(
  state = initialState,
  action: Action,
): GitUsersState {
  const {
    type = '',
    payload = null,
  } = action;

  switch(type) {
    case TYPES.SEARCH_USERS: {
      return {
        ...state,
        users: null,
        fetchingUsers: true,
        error: "",
      };
    }

    case TYPES.SEARCH_USERS_GOT: {
      return {
        ...state,
        users: payload,
        fetchingUsers: false,
      };
    }

    case TYPES.SEARCH_USERS_GOT: {
      return {
        ...state,
        fetchingUsers: false,
        error: payload,
      };
    }

    default: {
      return { ...state };
    }
  }
}
