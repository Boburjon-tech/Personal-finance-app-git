import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loginPending, loginSuccess, loginError } from "../redux/userSlice";

const useGoogleProvider = () => {
  const dispatch = useDispatch();

  const googleProvider = async () => {
    dispatch(loginPending());

    try {
      const provider = new GoogleAuthProvider();
      const req = await signInWithPopup(auth, provider);
      const user = req.user;

      // Firestore bazasiga user ma'lumotlarini yozamiz
      await setDoc(doc(db, "users", user.uid), {
        displayName: user.displayName,
        photoURL: user.photoURL,
        online: true,
      });

      dispatch(loginSuccess({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };

  return { googleProvider };
};

export default useGoogleProvider;
