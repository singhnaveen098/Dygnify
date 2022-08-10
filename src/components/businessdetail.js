import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";

const Businessdetail = ({
  handleNext,
  setbusinessdetails,
  businessdetails,
}) => {
  
  const onchange = (e) => {
    setbusinessdetails({ ...businessdetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="text-2xl font-bold underline underline-offset-4 mb-8">
        Business Details :
      </div>
      <div className="grid">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="companyname"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Company Name
              </label>
              <input
                required
                type="text"
                id="companyname"
                name="companyname"
                value={businessdetails.companyname}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="gstno"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Gst No.
              </label>
              <input
                required
                type="text"
                id="gstno"
                name="gstno"
                value={businessdetails.gstno}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="companyphone"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Phone
              </label>
              <input
                required
                type="number"
                id="companyphone"
                name="companyphone"
                value={businessdetails.companyphone}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="businesstype"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Business Type
              </label>
              <input
                required
                type="text"
                id="businesstype"
                name="businesstype"
                value={businessdetails.businesstype}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="p-2 w-11/12 sm:w-3/4">
          <div className="mb-4">
            <label
              htmlFor="companyaddress"
              className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
            >
              Company Address
            </label>
            <textarea
              required
              id="companyaddress"
              name="companyaddress"
              value={businessdetails.companyaddress}
              onChange={onchange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="companypincode"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Pincode
              </label>
              <input
                required
                type="number"
                id="companypincode"
                name="companypincode"
                value={businessdetails.companypincode}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="companystate"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                State
              </label>
              <input
                required
                type="text"
                id="companystate"
                name="companystate"
                value={businessdetails.companystate}
                onChange={onchange}
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

export default Businessdetail;
