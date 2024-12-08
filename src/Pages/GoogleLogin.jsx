import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Layout/Firebase";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  function googleAuth() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const result = GoogleAuthProvider.credentialFromResult(res);

        console.log(result);
        console.log(result.accessToken);
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      console.log(user.photoURL);
    });
    return () => unsubscribe();
  }, []);

  function logout() {
    signOut(auth)
      .then(() => {
        alert("logout.......");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>

      {user ? (
        <>
          <h1>welocome,{user.displayName}</h1>
          <p>{user.email}</p>
          <button className="btn" onClick={() => logout()}>
            logout
          </button>
        </>
      ) : (
        <>
          <button onClick={() => googleAuth()}>google</button>
        </>
      )}
    </>
  );
};

export default GoogleLogin;
