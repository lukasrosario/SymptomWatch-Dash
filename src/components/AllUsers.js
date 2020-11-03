import React, { useState, useContext, useEffect } from 'react';
import UserItem from './UserItem';
import Loading from '../pages/Loading';
import { Scrollbars } from 'react-custom-scrollbars';
import { FirebaseContext } from '../firebase';

const AllUsers = () => {
  const [initializing, setInitializing] = useState(true);
  const [data, setData] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await firebase.fetchUsers();
      setData(users);
      setInitializing(false);
    };

    fetchUsers();
  }, []);

  if (initializing) {
    return <Loading />;
  }

  return (
    <div className="h-full pb-16">
      <Scrollbars autoHide className="h-full">
        {data.map((item, index) => (
          <UserItem
            key={index}
            name={item.name}
            lastUpload={item.lastUpload}
            cough={item.cough}
            breath={item.breath}
            fever={item.fever}
            throat={item.throat}
            email={item.email}
          />
        ))}
      </Scrollbars>
    </div>
  );
};

export default AllUsers;
