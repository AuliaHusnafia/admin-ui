import "./App.css";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import BalancePage from "./pages/balance";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-blue-500 text-white rounded">
            Login
          </Link>
          <Link to="/register" className="p-2 m-5 bg-green-500 text-white rounded">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/overview",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/balances",
      element: <BalancePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/transaction",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/bills",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/expenses",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/goals",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/settings",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;