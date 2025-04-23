// src/hooks/useLogin.js

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../apps/features/userSlice";
import { useState } from "react";
import { toast } from "sonner";

const useLogin = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const loginn = async (email, password) => {
    setIsPending(true); // Show loading state
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;

      // Dispatch the login action to store the user's data
      dispatch(login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));

      setData(user);
    } catch (err) {
      toast.error(err.message); // Display error message
      console.log("Login error:", err.message);
    } finally {
      setIsPending(false); // Hide loading state
    }
  };

  return { isPending, data, loginn };
};

export default useLogin;
