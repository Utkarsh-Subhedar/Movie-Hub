import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [UserData, setUserData] = useState({
    Username: "",
    Password: "",
    email: "",
  });
  const Navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const userLogin = () => {
    Navigate("/");
  };

  return (
    <div className="m-[2rem]">
      <div className="text-center font-roboto font-semibold text-slate-200 mb-8 text-2xl md:text-3xl">
        USER LOGIN{" "}
      </div>
      <div className="flex justify-center">
        <div className="bg-slate-300 rounded-md *:text-black p-10 space-y-3 w-[20rem] ">
          <div className="*:font-roboto">
            <label className="text-base md:text-lg">Enter Email</label>
            <Input
              type="email"
              className="w-[14rem] text-slate-200"
              name="email"
              Placeholder="Enter Email"
              value={UserData.email}
              onChange={handleChange}
            />
          </div>
          <div className="*:font-roboto">
            <label className="text-base md:text-lg">Enter Password</label>
            <Input
              type="text"
              className="w-[14rem] text-slate-200"
              name="Password"
              value={UserData.Password}
              Placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button onClick={userLogin}>Log In</Button>
          </div>
          <div className="text-center">
            Dont have account?{" "}
            <Link to="/SignUp" className="text-sky-700">
              SignUp
            </Link>
          </div>
          <div className="font-roboto text-center text-xs text-red-600">
            forget Password?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
