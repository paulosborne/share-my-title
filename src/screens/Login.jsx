import React from 'react';
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom';
import useRootStore from '../hooks/useRootStore'
import logo from "../images/logo.png"

const Login = observer(() => {
  const { user } = useRootStore();
  let history = useHistory();

  const onSubmit = () => {
    history.push("/image-picker")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Hello! 
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
         Please provide the following details
        </p>
      </div>
   

        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input onChange={e => user.setFirstName(e.target.value)} id="firstName" name="firstName" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First name" />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input onChange={e => user.setLastName(e.target.value)} id="lastName" name="lastName" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Surname" />
          </div>
      
          <div>
            <label htmlFor="title" className="sr-only">ANDTitle</label>
            <input onChange={e => user.setTitle(e.target.value)} id="title" name="title" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="AND title" />
          </div>
          <div>
            <label htmlFor="interests" className="sr-only">Interests</label>
            <input onChange={e => user.setInterests(e.target.value)} id="interests" name="interests" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 rounded-b-md focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Interests" />
          </div>
        </div>

        <div>
          <button onClick={onSubmit} type="button" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Continue
          </button>
        </div>
    </div>
    </div>
  );
});

export default Login;
