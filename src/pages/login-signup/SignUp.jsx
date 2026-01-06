import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isFormValid =
    userData.name &&
    userData.email &&
    userData.password &&
    userData.confirmPassword &&
    userData.password === userData.confirmPassword &&
    userData.acceptedTerms;

  const handleSignup = () => {
    if (!isFormValid) return;
    navigate("/Login");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Left Section (Branding) */}
      <div className="hidden md:flex flex-col justify-center px-16 text-slate-200 animate-fade-in-left">
        <h1 className="text-4xl font-bold mb-4">
          Unlimited Movies. Endless Entertainment.
        </h1>
        <p className="text-lg text-slate-400 max-w-md">
          Discover trending movies, timeless classics, and personalized
          recommendations—all in one place. Create your account and start
          watching instantly.
        </p>
      </div>

      {/* Right Section (Form) */}
      <div className="flex items-center justify-center px-6 animate-fade-in-right">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-semibold text-slate-100">
            Create Your Movie Account
          </h2>

          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Your Full Name"
              value={userData.name}
              onChange={handleChange}
              className="h-11"
            />

            <Input
              type="email"
              name="email"
              placeholder="Email for account access"
              value={userData.email}
              onChange={handleChange}
              className="h-11"
            />

            <Input
              type="password"
              name="password"
              placeholder="Create a secure password"
              value={userData.password}
              onChange={handleChange}
              className="h-11"
            />

            <Input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter your password"
              value={userData.confirmPassword}
              onChange={handleChange}
              className="h-11"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-400">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={userData.acceptedTerms}
              onChange={handleChange}
              className="accent-sky-500"
            />
            I agree to the Terms, Privacy Policy, and Content Guidelines
          </label>

          <Button
            onClick={handleSignup}
            disabled={!isFormValid}
            className="w-full h-11 text-base transition-all duration-300 disabled:opacity-50"
          >
            Start Watching
          </Button>

          <p className="text-sm text-center text-slate-400">
            Already a member?
            <Link to="/Login" className="text-sky-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
