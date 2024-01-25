import React, { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  }
  const handleButtonClick = () => {
    // validate form data
   // checkValidData(email,password);
   const message = checkValidData(email.current.value,password.current.value,fullname?.current?.value);
    setErrorMessage(message);
  }
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')] bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-gray-900/60"
        >
          <div className="max-w-sm py-12 px-8 absolute bg-black text-white w-full bg-opacity-50 sm:w-2/3 lg:w-1/4 md:w-2/6 mx-auto">
            <form className="" onSubmit={(e)=>e.preventDefault()}>
              <h1 className="mb-2 text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm && <div className="mb-2">
                 <input
                  className="shadow appearance-none border rounded w-full p-3 my-2 bg-zinc-800 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullname"
                  type="text"
                  placeholder="Full Name"
                  ref={fullname}
                />
              </div>}
              <div className="mb-2">
                <input
                  className="shadow appearance-none border rounded w-full p-3 my-2 bg-zinc-800 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email Address"
                  ref={email}
                />
              </div>
              <div className="mb-2">
                <input
                  className="shadow appearance-none border rounded w-full p-3 my-2 bg-zinc-800 text-gray-500 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="***********"
                  ref={password}
                />
              </div>
              <p className="text-red-800 font-bold text-md pb-4">{errorMessage}</p>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                onClick={handleButtonClick}>
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
              </div>
              <p className="text-xs my-4 p-2  text-zinc-400 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign In Now."}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
