import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../components/Layout/MainLayout";
import Button from "@/components/ReusableComponents/Button";
import Input from "@/components/ReusableComponents/Input";
import { login } from "../../lib/api";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirectUrl = location.state?.redirectUrl || "/";

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
          <div className="rounded-lg bg-gray-700 shadow-lg p-8 ">
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
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </div>
              <div id="password">
                        <label
                  htmlFor="password"
                  className="text-[#5a7184] font-semibold block"
                >Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && signIn({ email, password })
                  }
                />
              </div>

              <Link
                to="/password/forgot"
               className="text-sm"
              >
                Forgot password?
              </Link>
              <Button
                className="my-2"
                isLoading={isPending}
                isDisabled={!email || password.length < 6}
                onClick={() => signIn({ email, password })}
              >
                Sign in
              </Button>
              <p className="text-sm text-center">
                Don&apos;t have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
export default Login;
