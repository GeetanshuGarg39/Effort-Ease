import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";

const initialValues = {
    email: "",
    password: ''
}

const LoginCard = () => {

  const history = useNavigate();

  const [inputs,setInputs] = useState(initialValues)

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,[e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const onSubmit = async() => {
      try{
        const res = await axios.post("http://localhost:8000/api/users/auth", {
          email:inputs.email,
          password:inputs.password
        })
        console.log(res.data);
        setInputs(initialValues);
        history("/home")
      }catch(error){
        console.log(error)
      }
    }
    onSubmit()

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
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
          name="password"
          value={inputs.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Your password"
          autoComplete="off"
        />
        {/* <p className='text-red-600'>{errors.password?.message}</p> */}
      </div>

      <p className="mx-auto mt-2 text-slate-600">
        New on our platform?
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-800 ml-1"
        >
          Create an account
        </Link>
      </p>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginCard;
