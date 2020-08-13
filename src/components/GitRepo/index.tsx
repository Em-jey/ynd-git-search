import React from 'react';
import { Link45deg, StarFill } from 'react-bootstrap-icons';
import { Dict } from 'types/shered';

type Props = {
  data: Dict,
};

const GitRepoBox: React.FC<Props> = (props) => {
  return (
    <div className="col-sm-10 mt-2 repo-container d-flex p-2 float-right">
      <div className="repo-info mr-2">
        <a
          href={`${props.data.html_url}`}
          target="_blank"
          className="repo-name"
        >
          <Link45deg/> {props.data.name}
        </a>
        <div>{props.data.description}</div>
      </div>
      <div className="text-center">
        <StarFill/>
        <div>{props.data.stargazers_count}</div>
      </div>
    </div>
  );
};

export default GitRepoBox;
