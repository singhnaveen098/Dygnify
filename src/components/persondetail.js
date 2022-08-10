import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const Persondetail = ({ handleNext, setpersondetails, persondetails }) => {
  
  const onchange = (e) => {
    setpersondetails({ ...persondetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="text-2xl font-bold underline underline-offset-4 mb-8">
        Personal Details :
      </div>
      <div className="grid">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="firstname"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                First Name
              </label>
              <input
                required
                type="text"
                id="firstname"
                name="firstname"
                value = {persondetails.firstname}
                onChange = {onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="lastname"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                id="lastname"
                name="lastname"
                value = {persondetails.lastname}
                onChange = {onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Phone
              </label>
              <input
                required
                type="number"
                id="phone"
                name="phone"
                value = {persondetails.phone}
                onChange = {onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2 sm:w-1/4">
            <div className="mb-4">
              <label
                htmlFor="age"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Age
              </label>
              <input
                required
                type="number"
                id="age"
                name="age"
                value = {persondetails.age}
                onChange = {onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="p-2 w-11/12 sm:w-3/4">
          <div className="mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
            >
              Address
            </label>
            <textarea
              required
              id="address"
              name="address"
              value = {persondetails.address}
              onChange = {onchange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Pincode
              </label>
              <input
                required
                type="number"
                id="pincode"
                name="pincode"
                value = {persondetails.pincode}
                onChange = {onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                State
              </label>
              <input
                required
                type="text"
                id="state"
                name="state"
                value = {persondetails.state}
                onChange = {onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          className="mt-2 text-white flex-shrink-0 inline-flex bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded disabled:opacity-75"
        >
          Save & Continue
          <MdOutlineNavigateNext className="m-1 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Persondetail;
