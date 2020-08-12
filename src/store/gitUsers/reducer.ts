import { Action } from 'types/store';
import * as TYPES from './constants';
import { Dict } from 'types/shered';

export type GitUser = {
  login: string,
  avatar: string,
  site: string,
  repos_url: string,
  repos: Dict[] | null,
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

    case TYPES.UPDATE_USER_REPOS: {
      const newUsers = state.users.map((user) => {
        if (user.id === payload.userID) {
          user.repos = payload.repos;
        }
        return user;
      });
      return {
        ...state,
        users: newUsers,
      };
    }

    default: {
      return { ...state };
    }
  }
}
