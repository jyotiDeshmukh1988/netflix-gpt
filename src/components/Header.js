import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => { // unsubscribe the onAuthStateChanged listener when component is unmount
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black flex justify-between w-full">
      <div>
        <img
          className="w-44 z-10"
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex p-3 items-center">
          <img
            className="w-10 h-10 rounded-lg"
            alt="usericon"
            src={USER_AVATAR}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
