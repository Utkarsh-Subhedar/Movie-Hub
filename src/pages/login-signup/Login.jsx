import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    EmptyError: "",
    loginFailed: "",
    userNotFound: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(!userData.email);
    const { name, value } = e.target;
    setError({
      EmptyError: "",
      loginFailed: "",
      userNotFound: "",
    });

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const user = JSON.parse(localStorage.getItem("userCredentials"));
  console.log(user);
  const handleLogin = () => {
    if (!user) {
      setError({
        userNotFound: "User not found plase sign up",
      });
    } else if (!userData.email || !userData.password) {
      setError({ EmptyError: "* All fields are required" });
    } else if (
      userData.email !== user.email ||
      userData.password !== user.password
    ) {
      setError({
        loginFailed: "Invalid email or password",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300  dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Left Section (Branding) */}
      <div className="hidden md:flex flex-col justify-center px-16 dark:text-slate-200 animate-fade-in-left">
        <h1 className="text-4xl font-bold mb-4">Welcome Back to MovieHub</h1>
        <p className="text-lg dark:text-slate-400 max-w-md">
          Continue watching your favorites, explore new releases, and get
          personalized movie recommendations just for you.
        </p>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex items-center justify-center px-6 animate-fade-in-right">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-3xl font-semibold dark:text-slate-100">
            Sign In
            <p className="text-sm text-red-600 font-medium pt-2">
              {error?.EmptyError}
            </p>
          </h2>

          <div className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={userData.email}
              onChange={handleChange}
              className="h-11"
            />

            <Input
              type="password"
              name="password"
              placeholder="Your password"
              value={userData.password}
              onChange={handleChange}
              className="h-11"
            />
          </div>

          <div className="flex justify-between text-sm px-1">
            <p className="text-sm text-red-600 font-medium ">
              {error?.loginFailed || error?.userNotFound}
            </p>
            <span>
              <Link
                to="/forgot-password"
                className="text-sky-500 hover:underline"
              >
                Forgot password?
              </Link>
            </span>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full h-11 text-base transition-all duration-300 disabled:opacity-50"
          >
            Continue Watching
          </Button>

          <p className="text-sm text-center dark:text-slate-400">
            New to MovieHub?{" "}
            <Link to="/SignUp" className="text-sky-500 hover:underline">
              Sign up{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
