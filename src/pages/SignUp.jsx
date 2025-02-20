import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [UserData, setUserData] = useState({
    Username: "",
    Password: "",
  });
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const SaveUserData = () => {
    console.log("User", UserData.Username);
    if (!UserData.Username || !UserData.Password) {
      alert("Both Fields are required");
    } else {
      localStorage.setItem("UserData", JSON.stringify(UserData));
      Navigate("/Login");
    }
  };
  return (
    <div className="m-[6rem]">
      <div className="text-center font-roboto text-slate-200 mb-8 text-3xl">
        NEW USER SIGNUP{" "}
      </div>
      <div className="flex justify-center">
        <div className="bg-slate-300 rounded-md *:text-black p-10 space-y-3 w-[20rem] ">
          <div className="*:font-roboto">
            <label className="text-lg">Enter Username</label>
            <Input
              type="text"
              className="w-[14rem] text-slate-200"
              name="Username"
              Placeholder="Enter Username"
              onChange={handleChange}
            />
          </div>
          <div className="*:font-roboto">
            <label className="text-lg">Enter Password</label>
            <Input
              type="text"
              className="w-[14rem] text-slate-200"
              name="Password"
              Placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button onClick={SaveUserData}>SignUp</Button>
          </div>
          <p className="mt-3 text-center text-sm">
            Aleready have an account?{" "}
            <span className="underline text-sky-600">
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
