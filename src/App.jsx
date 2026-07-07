import "./App.css";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import BalancePage from "./pages/balance";
import ExpensePage from "./pages/Expense";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" replace />;
  };

  const NotRequireAuth = ({ children }) => {
    return user ? <Navigate to="/overview" replace /> : children;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Navigate to="/overview" replace />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/overview",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
    {
      path: "/expense",
      element: (
        <RequireAuth>
          <ExpensePage />
        </RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth>
          <ExpensePage />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
