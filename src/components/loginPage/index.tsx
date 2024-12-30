"use client";
import React, { useState } from "react";
import { LoginSchema } from "../../validation/schemas/loginSchema";
import { RegistrationSchema } from "../../validation/schemas/registrationSchema";

function LoginAndRegisterPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [registrationFormData, setRegistrationFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState<any>({});
  const [registrationError, setRegistrationError] = useState<any>({});

  const handleChangeOnLoginFormData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeOnRegistrationFormData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegistrationFormData({
      ...registrationFormData,
      [event.target.name]: event.target.value,
    });
  };
  const checkLoginValidation = (event: React.FormEvent) => {
    event.preventDefault();
    const validation = LoginSchema.safeParse(loginFormData);
    if (!validation.success) {
      const fieldErrors = validation.error.formErrors.fieldErrors;
      setLoginError(fieldErrors);
    } else {
      setLoginError({});
    }
  };
  const checkRegistrationValidation = (event: React.FormEvent) => {
    event.preventDefault();
    const validation = RegistrationSchema.safeParse(registrationFormData);
    if (!validation.success) {
      const fieldErrors = validation.error.formErrors.fieldErrors;
      setRegistrationError(fieldErrors);
    } else {
      setRegistrationError({});
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row border-4 border-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl">
        {/* Form Section */}
        <div
          className={`${
            isLogin ? "animate-slideLeft" : "animate-slideRight"
          } flex flex-col justify-center bg-white w-full p-6 md:p-8`}
        >
          {isLogin ? (
            /* Login Form */
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
              <label htmlFor="email" className="text-gray-600 mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChangeOnLoginFormData}
                className="mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 w-full"
                placeholder="Enter your email"
              />
              <div className="min-h-8">
                {loginError.email && (
                  <p className="text-red-500">{loginError.email[0]}</p>
                )}
              </div>
              <label htmlFor="password" className="text-gray-600 mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChangeOnLoginFormData}
                className="mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 w-full"
                placeholder="Enter your password"
              />
              <div className="min-h-8">
                {loginError.password && (
                  <p className="text-red-500">{loginError.password[0]}</p>
                )}
              </div>
              <p>
                Don&apos;t have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-green-500 underline"
                >
                  Register
                </button>
              </p>
              <button
                onClick={checkLoginValidation}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
              >
                Login
              </button>
            </>
          ) : (
            /* Registration Form */
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Register
              </h2>
              <label htmlFor="username" className="text-gray-600 mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChangeOnRegistrationFormData}
                className="mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 w-full"
                placeholder="Enter your username"
              />
              <div className="min-h-8">
                {registrationError.username && (
                  <p className="text-red-500">
                    {registrationError.username[0]}
                  </p>
                )}
              </div>
              <label htmlFor="email" className="text-gray-600 mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChangeOnRegistrationFormData}
                className="mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 w-full"
                placeholder="Enter your email"
              />
              <div className="min-h-8">
                {registrationError.email && (
                  <p className="text-red-500">{registrationError.email[0]}</p>
                )}
              </div>
              <label htmlFor="password" className="text-gray-600 mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChangeOnRegistrationFormData}
                className="mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 w-full"
                placeholder="Enter your password"
              />
              <div className="min-h-8">
                {registrationError.password && (
                  <p className="text-red-500">
                    {registrationError.password[0]}
                  </p>
                )}
              </div>
              <p>
                Already have an account?{" "}
                <button
                  onClick={toggleForm}
                  className="text-green-500 underline"
                >
                  Login
                </button>
              </p>
              <button
                onClick={checkRegistrationValidation}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
              >
                Register
              </button>
            </>
          )}
        </div>

        {/* Switching Section (Hidden on Small Screens) */}
        <div
          className={`${isLogin ? "animate-slideRight" : "animate-slideLeft"} ${
            isLogin ? "bg-green-500" : "bg-green-400"
          } hidden md:flex flex-col items-center justify-center w-1/2 p-8`}
        >
          <h2 className="text-2xl font-semibold text-white text-center">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
          <p className="text-white mt-4 text-center">
            {isLogin ? "Sign in to continue" : "Sign up to get started"}
          </p>
          <button
            onClick={toggleForm}
            className="mt-6 px-6 py-2 bg-white text-slate-600 font-semibold rounded-lg hover:bg-slate-200 transition duration-200"
          >
            {isLogin ? "Register Now" : "Login"}
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
  @keyframes slideLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animate-slideLeft {
    animation: slideLeft 0.5s ease-in-out forwards;
  }

  .animate-slideRight {
    animation: slideRight 0.5s ease-in-out forwards;
  }
`}</style>
    </div>
  );
}

export default LoginAndRegisterPage;
