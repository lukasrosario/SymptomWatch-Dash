import React, { useContext } from 'react';
import { FirebaseContext } from '../firebase';

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext);
  const signout = async () => {
    firebase.signOut();
  };
  return (
    <button
      onClick={() => signout()}
      className="text-xl w-32 font-robot py-2 bg-purple-500 text-white hover:bg-purple-700 cursor-pointer rounded-md"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
