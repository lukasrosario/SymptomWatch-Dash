import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import { FirebaseContext } from '../firebase';
import useRouter from '../utils/Router';

const SignInButton = () => {
  const firebase = useContext(FirebaseContext);
  const router = useRouter();
  const login = async () => {
    firebase.googleSignIn();
  };
  return <GoogleButton onClick={() => login()} />;
};

export default SignInButton;
