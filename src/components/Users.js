import React from 'react';
import Categories from './Categories';
import AllUsers from './AllUsers';

const Users = (props) => {
  return (
    <div className="w-full h-full divide-y divide-gray-700 rounded-md">
      <Categories />
      <AllUsers />
    </div>
  );
};

export default Users;
