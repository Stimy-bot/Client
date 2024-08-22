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
import MainLayout from '@/MainLayout';
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
          <Box rounded="lg" bg="gray.700" boxShadow="lg" p={8}>
            {isError && (
              <Box mb={3} color="red.400">
                {error?.message || 'An error occurred'}
              </Box>
            )}
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Text color="text.muted" fontSize="xs" textAlign="left" mt={2}>
                  - Must be at least 6 characters long.
                </Text>
              </FormControl>
              <FormControl id="confirmPassword">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    createAccount({ email, password, confirmPassword })
                  }
                />
              </FormControl>
              <Button
                my={2}
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
              <Text align="center" fontSize="sm" color="text.muted">
                Already have an account?{' '}
                <ChakraLink as={Link} to="/login">
                  Sign in
                </ChakraLink>
              </Text>
            </Stack>
          </Box>
        </div>
      </section>
    </MainLayout>
  );
}
export default Register;
