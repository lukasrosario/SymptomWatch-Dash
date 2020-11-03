import React, { useContext } from 'react';
import PanelItem from './PanelItem';
import { AuthContext } from '../firebase';

const UserPanel = () => {
  const user = useContext(AuthContext);
  return (
    <div className="flex flex-col justify-around items-center w-1/12 shadow-lg bg-purple-300 rounded-md px-6">
      <PanelItem iconFamily="far" icon="fa-user">
        {user.displayName}
      </PanelItem>
    </div>
  );
};

export default UserPanel;
