

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config"; 
import { useDispatch } from "react-redux";
import { login } from "../apps/features/userSlice";
import { useState } from "react";

const useRegister = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const register = async (name, email, password) => {
    setIsPending(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, { displayName: name });

      const user = res.user;
      dispatch(login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));

      setData(user);
    } catch (err) {
      console.log("Xatolik:", err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, register };
};

export default useRegister;
