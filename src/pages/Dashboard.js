import React from 'react';
//import Manager from '../components/dashboard/Manager';
import UserPanel from '../components/UserPanel';
import SignOutButton from '../components/SignOutButton';

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-row p-6">
      <UserPanel />
    </div>
  );
};

export default Dashboard;
