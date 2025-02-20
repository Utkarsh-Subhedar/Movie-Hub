import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    Username: "",
    Password: "",
  });
  const LocalUserData = JSON.parse(localStorage.getItem("UserData"));

  const Navigate = useNavigate();
  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const setToken = () => {
    console.log("object");
  };

  const UserCheck = () => {
    console.log("name", userData.Username);
    console.log("pass", LocalUserData.Password);
    LocalUserData.Username == userData.Username &&
    LocalUserData.Password == userData.Password
      ? setToken()
      : alert("Incorrect Username or Password");
  };

  return (
    <div className="m-20">
      <div className="text-3xl text-center mb-5 font-roboto">LOGIN</div>
      <div className="flex justify-center items-center">
        <div className="w-[20rem] space-y-3 p-10 rounded-lg bg-slate-300 *:text-black *:font-roboto">
          <div className="*:font-roboto">
            <label className="text-base">Enter Username </label>
            <Input
              type="text"
              name="Username"
              value={userData.Username}
              className="text-white"
              Placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
          <div className="*:font-roboto">
            <label className="text-base">Enter Password </label>
            <Input
              type="text"
              name="Password"
              value={userData.Password}
              className="text-white"
              Placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={UserCheck}>Login</Button>
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
