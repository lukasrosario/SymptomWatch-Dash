import React from 'react';
import GoogleButton from 'react-google-button';
import { withFirebase } from '../firebase';
import useRouter from '../utils/Router';

const SignInButton = ({ firebase }) => {
  const router = useRouter();
  const login = async () => {
    const result = await firebase.googleSignIn();
    console.log(result);
    router.push('/');
  };
  return <GoogleButton onClick={() => login()} />;
};

export default withFirebase(SignInButton);
