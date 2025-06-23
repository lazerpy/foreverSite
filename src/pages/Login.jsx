import React, { useState } from "react";

const Login = () => {
  const [current, setCurrent] = useState("Login");
  const reload= async (event)=>{
    event.preventDefault()
  }
  return (
    <form
    onSubmit={reload}
      action=""
      className="flex flex-col items-center w-[90%]  sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl ">{current}</p>
        <hr className="border-none  h-[1.5px] w-8 bg-gray-800" />
      </div>
     {current === 'Login' ? ' ' :  <input
        type="text"
        className="w-full px-3 py-2 border border-gray-800  "
        placeholder="Username"
        required
      />}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800  "
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800  "
        placeholder="Password"
        required
      />
      
      <div className="w-full flex justify-between text-sm mt-[8px]">
        <p className="cursor-pointer text-blue-600">Forgot Password</p>
        {
            current === 'Login' ? <p onClick={()=>setCurrent('Sign up')} className="cursor-pointer text-blue-600">Create Account</p> : 
            <p onClick={()=>setCurrent('Login')} className="cursor-pointer text-blue-600">Login here</p>
        }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer">{current === 'Login' ? 'Sign in' : 'Login'}</button>
    </form>
  );
};

export default Login;
