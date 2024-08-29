import { Navigate, Outlet } from 'react-router-dom';
import Spinner from './ReusableComponents/Spinner';
import useAuth from '@/hooks/useAuth';
import UserMenu from '@/components/UserMenu';

function AppContainer() {
  const { user, isLoading } = useAuth();

  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    <main className="flex flex-col w-full h-4/5">
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
}
export default AppContainer;
