import React from 'react';
import Manager from '../components/Manager';
import UserPanel from '../components/UserPanel';

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex flex-row p-6">
      <UserPanel />
      <Manager />
    </div>
  );
};

export default Dashboard;
