import React from 'react';
import SignInButton from '../components/SignInButton';

import doctor from '../assets/img/doctor.svg';

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200 py-16">
      <p className="text-5xl font-roboto mb-4">Symptom Watch</p>
      <div className="w-4/5 relative h-full flex flex-row justify-center items-center">
        <img
          alt="doctor"
          src={doctor}
          className="w-4/6 px-4 absolute left-0 pr-56"
        />
        <div className="w-1/2"></div>
        <div className="w-5/12 z-10 flex items-center justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
