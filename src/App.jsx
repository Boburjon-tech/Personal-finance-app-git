import { createBrowserRouter ,Navigate,RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Overview from "./pages/overview/Overview";
import Budgets from "./pages/budgets/Budgets";
import Posts from "./pages/posts/Posts";
import Transactions from "./pages/transactions/Transactions";
import RecurringBills from "./pages/recurringBills/RecurringBills";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
function App() {
  const user = false;
  const routes = createBrowserRouter([
    {
      path : "/",
      element : (
        <ProtectedRoutes user={user}>
          <MainLayout/>
        </ProtectedRoutes>
      ),
      children : [
        {
          index : true,
          element : <Overview/>,
        },
        {
          path : "/budgets",
          element : <Budgets/>,
        },
        {
          path : "/posts",
          element : <Posts/>,
        },
        {
          path : "/recurringBills",
          element : <RecurringBills/>,
        },
        {
          path : "/transactions",
          element : <Transactions/>,
        },
        {
          path : "/budgets",
          element : <Budgets/>,
        },

      ],
    },
    {
      path : "/login",
      element : user ? <Navigate to ="/"/> : <Login/>
    },
    {
      path : "/register",
      element : user ? <Navigate to ="/"/> : <Register/>
    },
  ])

  return <RouterProvider router={routes}/>
}

export default App
