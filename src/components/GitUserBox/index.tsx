import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-bootstrap';
import { ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import { GitUser } from 'store/gitUsers/reducer';
import { Dict } from 'types/shered';
import GitRepoBox from 'components/GitRepo';
import ApiService from 'services/api.service';

type Props = {
  user: GitUser,
};

const GitUserBox: React.FC<Props> = (props) => {
  const { user } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [repos, setRepos] = useState<Dict[]>(null);

  const fetchUserRepos = () => {
    console.log(`fetchUserRepos fetching: ${ user.id }`);
    // ApiService.get(user.repos_url)
    // .then((repos) => {
    //   console.log("repos: ", repos);
    //   setRepos(repos);
    // });
    const reposTmp = require('./repos_temp.json');
    console.log("reposTmp: ", reposTmp);
    setRepos(reposTmp);
  };

  useEffect(() => {
    fetchUserRepos();
  }, []);

  return (
    <div className="col-xl-4 mb-3 col-md-6">
      <div
        className="d-flex p-2 align-items-center git-user-box pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={user.avatar} className="mr-2 user-avatar" />
        <div className="user-login">{user.login}</div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <Collapse in={isOpen}>
        <div className="row">
          <div className=" col-12">
            {!repos ? null : repos.map((repo, i) => <GitRepoBox key={i} data={repo} />)}
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default GitUserBox;
