import React from 'react';
import { Dict } from 'types/shered';

type Props = {
  data: Dict,
};

const GitRepoBox: React.FC<Props> = (props) => {
  return (
    <div className="col-md-10 mt-2 repo-container d-flex p-2">
      <div className="repo-info mr-2">
        <div>{props.data.name}</div>
        <div>{props.data.description}</div>
      </div>
      <div>{props.data.stargazers_count}</div>
    </div>
  );
};

export default GitRepoBox;
