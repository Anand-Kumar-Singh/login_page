import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  const [userType, setUserType] = useState("Customer");

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const options = [
    { value: "customer", label: "Customer" },
    { value: "engineer", label: "Engineer" },
    { value: "admin", label: "Admin" },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white w-72 shadow-xl p-4">
        {!showSignup ? (
          <div className=" ">
            <div>
              <input
                type="text"
                className="border p-1 w-full mb-2 shadow-sm rounded text-gray-700 focus:outline-none focus:shadow"
                placeholder="User ID"
              />
            </div>
            <div>
              <input
                type="password"
                className="border p-1 w-full mb-4 shadow-sm rounded focus:outline-none focus:shadow"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                type="submit"
                className="p-1 w-full bg-blue-500 text-white rounded-sm shadow-md"
                value="Login"
              />
            </div>
            <div
              className="hover:text-purple-300 cursor-pointer p-1 m-2"
              onClick={toggleSignup}
            >
              Don't have an account? Signup
            </div>
          </div>
        ) : (
          <div className="">
            <div>
              <input
                type="text"
                className="border p-1 mb-2 focus:outline-none w-full shadow-sm rounded focus:shadow"
                placeholder="User ID"
              />
            </div>
            <div>
              <input
                type="text"
                className="border w-full focus:outline-none shadow-sm rounded focus:shadow p-1 mb-2"
                placeholder="Username"
              />
            </div>
            <input
              type="email"
              className="border w-full focus:outline-none shadow-sm rounded focus:shadow p-1 mb-2"
              placeholder="Email"
            />
            <div>
              <input
                type="password"
                className="border w-full focus:outline-none shadow-sm rounded focus:shadow p-1 mb-2"
                placeholder="Password"
              />
            </div>
            {/* <div className="w-full mb-4">
              <Select label="Select User">
                <Option>Customer</Option>
                <Option>Engineer</Option>
                <Option>Admin</Option>
              </Select>
            </div> */}
            <div className="mb-4">
              <Dropdown placeholder="Search..." options={options} />
            </div>

            <div>
              <input
                type="submit"
                className="border w-full bg-blue-500 text-white rounded shadow-md p-1"
                value="Signup"
              />
            </div>
            <div
              className="cursor-pointer hover:text-purple-500"
              onClick={toggleSignup}
            >
              Already registered? Login
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
