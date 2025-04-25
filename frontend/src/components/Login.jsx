
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bookstore-3ch5.onrender.com/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Logged in Successfully!");
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  const handleClose = () => {
    document.getElementById("my_modal_3").close();
    navigate("/");
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:bg-[#1f1f1f] border dark:border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Login
            </h3>
            <button
              type="button"
              onClick={handleClose}
              className="text-xl font-bold text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Login Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition font-medium"
              >
                Login
              </button>
            </div>

            {/* Redirect to Signup */}
            <div className="text-center text-sm mt-4 text-gray-600 dark:text-gray-400">
              Not registered?{" "}
              <span
                className="underline text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  document.getElementById("my_modal_3").close();
                  navigate("/signup");
                }}
              >
                Signup
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
