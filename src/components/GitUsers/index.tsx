import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers, isUsersFetching } from 'store/gitUsers';
import GitUserBox from "components/GitUserBox";
import Spinner from 'components/Spinner';

type Props = {};

const GitUsers: React.FC<Props> = () => {
  const users = useSelector((state) => getUsers(state));
  const isPending = useSelector((state) => isUsersFetching(state));

  console.log("users: ", users);

  return (
    <div className="row">
      {
        !users && !isPending ? null :
        isPending ? <Spinner animation="grow"/> :
        users.map((user) => <GitUserBox key={user.id} user={user}/>)
      }
    </div>
  );
};

export default GitUsers;
