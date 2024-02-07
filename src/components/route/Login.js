import React, { useRef, useState } from "react";
import { checkValidData } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { USER_AVATAR, LOGO } from "../../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const user = useSelector((store) => store.user);
  const handleButtonClick = () => {
    // validate form data
    // checkValidData(email,password);
    const message = checkValidData(
      email.current.value,
      password.current.value,
      fullname?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    // Sign In Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          //console.log(user);
          //console.log(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const signInwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    if(user) navigate("/browse");
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    setErrorMessage(errorCode + " - " + errorMessage);
    // ...
  });
  }

  return (
    <>
      <div className="px-4 lg:px-8 pt-2 cursor-pointer absolute">
        <img className="w-44" src={LOGO} alt="logo" />
      </div>
      <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')] bg-cover bg-center">
        <div
          className="w-full h-screen flex justify-center items-center 
             bg-gray-900/60"
        >
          <div className="max-w-sm py-12 px-8 absolute bg-black text-white w-full bg-opacity-50 sm:w-2/3 lg:w-1/4 md:w-2/6 mx-auto">
            <form className="" onSubmit={(e) => e.preventDefault()}>
              <h1 className="mb-2 text-2xl">
                {isSignInForm ? "Sign In" : "Sign Up"}
              </h1>
              {!isSignInForm && (
                <div className="mb-2">
                  <input
                    className="shadow appearance-none border rounded w-full p-3 my-2 bg-zinc-800 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                    id="fullname"
                    type="text"
                    placeholder="Full Name"
                    ref={fullname}
                  />
                </div>
              )}
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
              <p className="text-red-800 font-bold text-md pb-4">
                {errorMessage}
              </p>
              <div className="flex items-center justify-between flex-col">
                <button
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleButtonClick}
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                {isSignInForm && <button onClick={()=>signInwithgoogle()} className="w-full mt-3 text-white py-2 px-3 rounded bg-red-700 hover:bg-red-800 font-bold p-3">SignIn with Google</button>}
              </div>
              <p
                className="text-xs my-4 p-2  text-zinc-400 cursor-pointer"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? Sign up now."
                  : "Already Registered? Sign In Now."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
