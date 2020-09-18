import React, { useContext } from 'react';
import { FirebaseContext } from '../firebase';
import useRouter from '../utils/Router';

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext);
  const router = useRouter();
  const signout = async () => {
    firebase.signOut();
  };
  return (
    <button
      onClick={() => signout()}
      className="text-xl font-robot justify-center items-center px-8 py-4"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
