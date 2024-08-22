import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
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
//   Alert,
//   AlertIcon,
// } from "@chakra-ui/react";
import MainLayout from "../../components/Layout/MainLayout";
import { sendPasswordResetEmail } from "../../lib/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

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
          <Box rounded="lg" bg="gray.700" boxShadow="lg" p={8}>
            {isError && (
              <Box mb={3} color="red.400">
                {error.message || "An error occurred"}
              </Box>
            )}
            <Stack spacing={4}>
              {isSuccess ? (
                <Alert status="success" borderRadius={12}>
                  <AlertIcon />
                  Email sent! Check your inbox for further instructions.
                </Alert>
              ) : (
                <>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                    />
                  </FormControl>
                  <Button
                    my={2}
                    isLoading={isPending}
                    isDisabled={!email}
                    onClick={() => sendPasswordReset(email)}
                  >
                    Reset Password
                  </Button>
                </>
              )}
              <Text align="center" fontSize="sm" color="text.muted">
                Go back to{" "}
                <ChakraLink as={Link} to="/login" replace>
                  Sign in
                </ChakraLink>
                &nbsp;or&nbsp;
                <ChakraLink as={Link} to="/register" replace>
                  Sign up
                </ChakraLink>
              </Text>
            </Stack>
          </Box>
        </div>
      </section>
    </MainLayout>
  );
};
export default ForgotPassword;
