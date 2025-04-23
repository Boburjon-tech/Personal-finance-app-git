import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const useLogout = () => {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  return { logoutUser };
};

export default useLogout;
