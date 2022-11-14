import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const btnClass = "bg-blue-600 text-white px-3 py-1 rounded-lg text-md hover:bg-blue-500";

export function SignIn() {
  return <button className={btnClass} onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>;
}

export function SignOut() {
  return (
    <div className="flex items-center gap-2">
      <p className="hidden mb:block">Hello, {auth.currentUser.displayName} &nbsp;</p>
      <button className={btnClass} onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}