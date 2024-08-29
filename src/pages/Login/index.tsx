import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import MainLayout from '@/components/Layout/MainLayout';
// eslint-disable-next-line import/extensions
import Button from '@/components/ReusableComponents/Button';
// eslint-disable-next-line import/extensions
// import Input from '@/components/ReusableComponents/Input';
import { login } from '../../lib/api';

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirectUrl = location.state?.redirectUrl || '/';

  const {
    mutate: signIn,
    isPending,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate(redirectUrl, {
        replace: true,
      });
    },
  });

  return (
    <MainLayout>
      <section className="container md:w-[600px] h-screen mx-auto px-5 pt-20">
        <div className="w-full m-w-sm mx-auto">
          <h2 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8 dark:text-[#5a7184] ">
            Sign in to your account
          </h2>
          <div className="p-8 rounded-lg border-solid border-dark-light shadow-2xl">
            {isError && (
              <div className="mb-3 text-red-400">Invalid email or password</div>
            )}
            <div className="flex flex-col mb-6 w-full">
              <div id="email">
                <label
                  htmlFor="email"
                  className="text-[#5a7184] font-semibold block"
                >
                  Email address
                  <input
                    // variant="primary"
                    // size="lg"
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // autoFocus
                    className="placeholder:text-[#959ead] text-dark-hard my-3 rounded-lg px-5 py-4 font-semibold block outline-none border w-full"
                  />
                </label>
              </div>
              <div id="password">
                <label
                  htmlFor="password"
                  className="text-[#5a7184] font-semibold block"
                >
                  Password
                  <input
                    // variant="primary"
                    // size="lg"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && signIn({ email, password })
                    }
                    className="placeholder:text-[#959ead] text-dark-hard my-3 rounded-lg px-5 py-4 font-semibold block outline-none border w-full"
                  />
                </label>
              </div>

              <Link
                to="/password/forgot"
                className="text-red-600 text-center font-semibold block "
              >
                Forgot password ?
              </Link>
              <Button
                className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 hover:opacity-75"
                isLoading={isPending}
                isDisabled={!email || password.length < 6}
                onClick={() => signIn({ email, password })}
              >
                Sign in
              </Button>
              <p className="text-dark-hard text-sm text-center dark:text-dark-light">
                Don&apos;t have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default Login;
