import React from 'react';
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom';
import useRootStore from '../hooks/useRootStore'
import logo from "../images/logo_lg.png"

const Home = () => {
  const { user } = useRootStore();
  let history = useHistory();

  const onClickContinue = () => {
    history.push("/your-details")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div class="flex flex-col items-center">
        <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Get to know a random ANDi! 
        </h2>
        <button className="w-64 bg-red-500 text-white rounded-full py-2 px-4" onClick={onClickContinue}>Continue</button>
      </div>
     
    </div>
    </div>
  );
};

export default Home;
