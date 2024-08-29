/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import MainLayout from '@/components/Layout/MainLayout';
// eslint-disable-next-line import/extensions
// import Input from '@/components/ReusableComponents/Input';
// eslint-disable-next-line import/extensions
import Button from '@/components/ReusableComponents/Button';
import { register } from '../../lib/api';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    mutate: createAccount,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate('/', {
        replace: true,
      });
    },
  });
  return (
    <MainLayout>
      <section className="container md:w-[600px] h-screen mx-auto px-5 pt-20">
        <div className="w-full m-w-sm mx-auto">
          <h2 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8 dark:text-[#5a7184] ">
            Create an account
          </h2>
          <div className="p-8 rounded-lg border-solid border-dark-light shadow-2xl">
            {isError && (
              <div className="mb-3 text-red-400">
                {error?.message || 'An error occurred'}
              </div>
            )}
            <div className=''>
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
                    value={email}
                      placeholder="Enter email"
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
                    value={password}
                    placeholder='Enter password'
                         className="placeholder:text-[#959ead] text-dark-hard my-3 rounded-lg px-5 py-4 font-semibold block outline-none border w-full"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && signIn({ email, password })
                    }

                  />
                <p className="text-sm text-left mt-2">
                  - Must be at least 6 characters long.
                </p>
                </label>
              </div>
              <div id="confirmPassword">
                <label htmlFor="password"  className="text-[#5a7184] font-semibold block"
                >Confirm Password
                <input
                  type="password"
                  placeholder='Confirm password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    createAccount({ email, password, confirmPassword })
                  }
                      className="placeholder:text-[#959ead] text-dark-hard my-3 rounded-lg px-5 py-4 font-semibold block outline-none border w-full"
                />
                </label>
              </div>
              <Button
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 hover:opacity-75"
                isLoading={isPending}
                isDisabled={
                  !email || password.length < 6 || password !== confirmPassword
                }
                onClick={() =>
                  createAccount({ email, password, confirmPassword })
                }
              >
                Create Account
              </Button>
              <p className="text-dark-hard text-sm text-center dark:text-dark-light">
                Already have an account?{' '}
                <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default Register;
