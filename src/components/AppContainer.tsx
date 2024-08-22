import Spinner from "./ReusableComponents/Spinner";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import UserMenu from "@/components/UserMenu";

const AppContainer = () => {
  const { user, isLoading } = useAuth();

  return isLoading ? (
    <main
      className="flex flex-col w-full h-4/5"
    >
      <Spinner className="mb-4" />
    </main>
  ) : user ? (
    <div className="p-4 min-h-screen">
      <UserMenu />
      <Outlet />
    </div>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{
        redirectUrl: window.location.pathname,
      }}
    />
  );
};
export default AppContainer;
