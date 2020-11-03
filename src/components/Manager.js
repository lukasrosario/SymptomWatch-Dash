import React, { useState } from 'react';
import Users from './Users';
import SignOutButton from './SignOutButton';

const Manager = () => {
  const [active, setActive] = useState('allUsers');

  return (
    <div className="flex flex-col w-11/12 px-4 overflow-hidden">
      <div className="w-full flex flex-row justify-end items-center mb-4">
        <SignOutButton />
      </div>
      <Users active={active} />
    </div>
  );
};

export default Manager;
