import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Alert, AlertIcon } from '@chakra-ui/react';
import MainLayout from '../../components/Layout/MainLayout';
// eslint-disable-next-line import/extensions
import Button from '@/components/ReusableComponents/Button';
import { sendPasswordResetEmail } from '../../lib/api';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: sendPasswordResetEmail,
  });

  return (
    <MainLayout>
      <section className="container md:w-[600px] h-screen mx-auto px-5 pt-20">
        <div className="w-full m-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8 dark:text-[#5a7184] ">
            Reset your password
          </h1>
          <div className="p-8 rounded-lg border-solid border-dark-light shadow-2xl">
            {isError && (
              <div className="mb-3 text-red-300">
                {error.message || 'An error occurred'}
              </div>
            )}
            <div className="spacing-y-4">
              {isSuccess ? (
                <Alert status="success" borderRadius={12}>
                  <AlertIcon />
                  Email sent! Check your inbox for further instructions.
                </Alert>
              ) : (
                <>
                  <div id="email">
                    <label
                      htmlFor="email"
                      className="text-[#5a7184] font-semibold block"
                    >
                      Email address
                      <input
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        // autoFocus
                        className="placeholder:text-[#959ead] text-dark-hard my-3 rounded-lg px-5 py-4 font-semibold block outline-none border w-full"
                      />
                    </label>
                  </div>
                  <Button
                    className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 hover:opacity-75"
                    isLoading={isPending}
                    isDisabled={!email}
                    onClick={() => sendPasswordReset(email)}
                  >
                    Reset Password
                  </Button>
                </>
              )}
              <p className="text-dark-hard text-sm text-center dark:text-dark-light">
                Go back to{' '}
                <Link to="/login" replace>
                  Sign in
                </Link>
                &nbsp;or&nbsp;
                <Link to="/register" replace>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
export default ForgotPassword;
