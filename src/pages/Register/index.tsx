import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   Link as ChakraLink,
//   Container,
// } from '@chakra-ui/react';
// eslint-disable-next-line import/extensions
import MainLayout from '@/components/Layout/MainLayout';
// eslint-disable-next-line import/extensions
import Input from '@/components/ReusableComponents/Input';
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
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8 dark:text-[#5a7184] ">
            Create an account
          </h1>
          <div className='' rounded="lg" bg="gray.700" boxShadow="lg" p={8}>
            {isError && (
              <div mb={3} color="red.400">
                {error?.message || 'An error occurred'}
              </div>
            )}
            <div spacing={4}>
              <div id="email">
              <label
                  htmlFor="email"
                  className="text-[#5a7184] font-semibold block"
                >Email address</label>
                <Input
                  type="email"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </div>
              <div id="password">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span color="text.muted" fontSize="xs" textAlign="left" mt={2}>
                  - Must be at least 6 characters long.
                </span>
              </div>
              <div id="confirmPassword">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    createAccount({ email, password, confirmPassword })
                  }
                />
              </div>
              <Button
                className='my-2'
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
              <p className="text-sm text-center">
                Already have an account?{''}
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
