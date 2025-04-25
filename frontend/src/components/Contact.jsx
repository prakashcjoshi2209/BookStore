import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // To reset the form after successful submission
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4001/contact", data);
      console.log("Form Data Submitted:", response.data);
      reset(); // Reset the form after successful submission
      alert("Your message has been sent successfully!"); // Success message
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-[#1f1f1f] dark:text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-[#2c2c2c] dark:border dark:border-gray-700 p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6 transition duration-300"
      >
        {/* Name Field */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border dark:border-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 dark:text-white bg-gray-100 dark:bg-[#3a3a3a] transition duration-300"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">Name is required</p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border dark:border-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 dark:text-white bg-gray-100 dark:bg-[#3a3a3a] transition duration-300"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">Email is required</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border dark:border-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 dark:text-white bg-gray-100 dark:bg-[#3a3a3a] transition duration-300"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">Message is required</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
