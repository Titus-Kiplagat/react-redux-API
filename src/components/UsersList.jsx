import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../store/users/usersSlice";
import List from "./List";

const UsersList = () => {
	const { users, isLoading, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if(isLoading) {
    return (
      <div className='flex justify-center mt-5 font-black text-8xl'>
        <h1>Loading...</h1>
      </div>
    );
  }

  if(error !== undefined) {
    return (
      <div className='flex justify-center mt-5 font-black text-4xl'>
        <h1>Something went wrong while fetching the data</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-2">Users List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {users.map((user) => (
          <List key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
