import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Overview from "./pages/overview/Overview";
import Budgets from "./pages/budgets/Budgets";
import Posts from "./pages/posts/Posts";
import Transactions from "./pages/transactions/Transactions";
import RecurringBills from "./pages/recurringBills/RecurringBills";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { isAuthReady, login } from "./apps/features/userSlice";
import { auth } from "./firebase/config";

function App() {
  const { user, authReady } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Overview /> },
        { path: "/budgets", element: <Budgets /> },
        { path: "/posts", element: <Posts /> },
        { path: "/recurringBills", element: <RecurringBills /> },
        { path: "/transactions", element: <Transactions /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "",
            photoURL: user.photoURL || "",
          })
        );
      }
      dispatch(isAuthReady());
    });
  }, []);

  return (
    <>
      {authReady && <RouterProvider router={routes} />}
    </>
  );
}

export default App;
