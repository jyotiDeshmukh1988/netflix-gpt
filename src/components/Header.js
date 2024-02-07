import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import InnerHeader from "./InnerHeader";
import lang from "../utils/languageConstants";

const Header = ({ path }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Dropdown, setDropdown] = useState(false);
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store?.config?.lang);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  // handle auth state change here

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //console.log(unsubscribe);
      /* its a event listener so we have to remove on unmount the component 
      by returning the function from the useEffect will unsubscribe 
      this event listener */
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        //navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      // unsubscribe the onAuthStateChanged listener when component is unmount
      unsubscribe();
    };
  }, []);

  const handleLanguage = (e) => {
    //alert("Language");
    // change language and store into the redux store
    dispatch(changeLanguage(e.target.value));
  };

  const handleDropDown = () => {
    setDropdown(!Dropdown);
  };
  return (
    <div className="w-full absolute bg-gradient-to-b from-black flex justify-between z-30">
      <div className="flex">
        <div className="px-4 lg:px-8 cursor-pointer">
          <Link to="/browse">
            <img className="w-44" src={LOGO} alt="logo" />
          </Link>
        </div>
        {user && <InnerHeader />}
      </div>
      {user && (
        <>
          <div className="flex justify-between mt-2 items-start">
            {path === "/gptSearch" && (
              <select
                className="px-5 py-2 mr-2 rounded-md bg-gray-800 text-white font-bold"
                onChange={handleLanguage}
              >
                {SUPPORTED_LANGUAGES?.map((lang) => {
                  return <option key={lang?.identifier} value={lang?.name} selected={lang?.name === langKey}>{lang?.name}</option>;
                })}
              </select>
            )}
            <div className="flex flex-col w-36 z-40">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-lg"
                  alt="usericon"
                  src={USER_AVATAR}
                />
                <span
                  className="-mt-5 material-symbols-outlined text-white cursor-pointer pt-5  hover:text-red-700"
                  onClick={handleDropDown}
                >
                  expand_more
                </span>
              </div>
              {Dropdown && (
                <div className="flex flex-col items-start bg-black m-0 md:mr-5 bg-opacity-60 p-2 gap-2">
                  <h1>
                    {user?.displayName && (
                      <h3 className="text-white">{user?.displayName}</h3>
                    )}
                  </h1>
                  <button
                    onClick={handleSignOut}
                    className="font-bold text-white text-sm"
                  >
                    {lang[langKey].Signout}
                  </button>
                  {path !== "/gptSearch" && (
                    <button
                      className="border-0 bg-red-700 font-semibold hover:bg-red-900 text-white px-2 py-2 rounded-md text-sm"
                      onClick={() => navigate("/gptSearch")}
                    >
                      {lang[langKey].gptButtonLabel}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
