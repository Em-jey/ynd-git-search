import { create } from 'store';
import { Dispatch } from 'redux';
import { SimpleDict } from 'types/shered';
import ApiService from 'services/api.service';
import * as TYPES from './constants';
import { GitUser } from './reducer';

export const searchUsers = (userName: string) => (dispach: Dispatch) => {
  dispach(create(TYPES.SEARCH_USERS));
  const params: SimpleDict = {
    q: userName,
    per_page: 5,
  };
  ApiService.get('/search/users', params)
    .then((res) => {
      console.log('res: ', res);
      const users: GitUser[] = res.items.map((user: SimpleDict) => ({
        id: user.id,
        login: user.login,
        avatar: user.avatar_url,
        site: user.html_url,
        repos_url: user.repos_url,
      }));
      dispach(create(TYPES.SEARCH_USERS_GOT, users));
    })
    .catch((error) => {
      console.log('fetch error: ', error);
      dispach(create(TYPES.SEARCH_USERS_ERROR, error.message));
    });
};
