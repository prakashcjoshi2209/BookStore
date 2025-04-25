

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bookstore-3ch5.onrender.com/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#121212] transition-colors duration-300">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white dark:bg-[#1f1f1f] border dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Sign Up
          </h3>
          <Link
            to="/"
            className="text-xl font-bold text-gray-400 hover:text-red-500 transition"
          >
            ✕
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-gray-50 dark:bg-[#2c2c2c] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-gray-50 dark:bg-[#2c2c2c] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border dark:border-gray-600 rounded-md bg-gray-50 dark:bg-[#2c2c2c] text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>

          {/* Submit & Login Toggle */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition font-medium"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <button
              type="button"
              className="underline text-blue-500 hover:text-blue-700"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Login Modal */}
      <Login />
    </div>
  );
};

export default Signup;

