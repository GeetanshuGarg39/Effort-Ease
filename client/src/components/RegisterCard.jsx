import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <form>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="name"
          id="name"
          value={name}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Your name"
          autoComplete="name"
        />
        {/* <p className='text-red-600'>{errors.name?.message}</p> */}
      </div>
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Your email"
          autoComplete="email"
        />
        {/* <p className='text-red-600'>{errors.email?.message}</p> */}
      </div>

      <div className="mt-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Password"
          autoComplete="off"
        />
        {/* <p className='text-red-600'>{errors.password?.message}</p> */}
      </div>
      <div className="mt-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-600"
        >
          Confirm Password
        </label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Confirm Password"
          autoComplete="off"
        />
        {/* <p className='text-red-600'>{errors.confirmPassword?.message}</p> */}
      </div>

      <p className="mx-auto mt-2 text-slate-600">
        Already have an account?
        <Link to="/" className="text-blue-500 hover:text-blue-800 ml-1">
          Login
        </Link>
      </p>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginCard;
