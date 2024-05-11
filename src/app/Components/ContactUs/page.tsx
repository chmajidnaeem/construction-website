import React from "react";
import { Input } from "@material-tailwind/react";

const Page = () => {
  return (
    <div className=" pt-6  md:px-48 px-5 bg-[#020510]">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4 ">
          <label
            className="block h-18 text-gray-300  bg-[#333333] px-6"
            htmlFor="category"
          >
            You are <span className="text-red-800">*</span>
          </label>
          <select
            id="category"
            className="block w-full p-2 pl-6  text-white text-base h-8 bg-[#333333] font-medium "
          >
            <option value="customer">Job Applicant</option>
            <option value="journalist">Journalist</option>
            <option value="supplier">Supplier</option>
            <option value="customer">Customer</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-12 ">
          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="name"
            >
              First Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="name"
            >
              Last Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="email"
            >
              Email <span className="text-red-800">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="phone"
            >
              Phone Number <span className="text-red-800">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="company"
            >
              Company <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="company"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 ">
            <label
              className="block h-18 text-gray-300  bg-[#333333] px-6"
              htmlFor="category"
            >
              You are <span className="text-red-800">*</span>
            </label>
            <select
              id="category"
              className="block w-full p-2 pl-6  text-white text-base h-8 bg-[#333333] font-medium "
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              {/* Add more countries here */}
            </select>
          </div>
        </div>

        <div className="mb-4 ">
          <label
            className="block h-18 text-gray-300  bg-[#333333] px-6 pt-3"
            htmlFor="message"
          >
            Message <span className="text-red-800">*</span>
          </label>
          <textarea
            id="message"
            className="block w-full p-2  text-base text-white bg-[#333333]"
          />
        </div>

        <div className="mb-4">
          <input type="checkbox" id="agree" className="mr-2" />
          <label className="text-gray-700" htmlFor="agree">
            Agree to the terms and conditions
          </label>
        </div>
        <div className="mb-4">
          <input type="checkbox" id="agree" className="mr-2" />
          <label className="text-gray-700" htmlFor="agree">
            Agree to the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Page;
