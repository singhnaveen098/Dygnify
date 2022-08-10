import React from "react";
import { AiOutlineSave } from "react-icons/ai";

const Loandetail = ({ handleSave, setloandetails, loandetails }) => {

  const onchange = (e) => {
    setloandetails({ ...loandetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="text-2xl font-bold underline underline-offset-4 mb-8">
        Loan Details :
      </div>
      <div className="grid">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="loanamount"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Loan Amount (₹)
              </label>
              <input
                required
                type="number"
                id="loanamount"
                name="loanamount"
                value={loandetails.loanamount}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-11/12 sm:w-3/4">
            <div className="mb-4">
              <label
                htmlFor="interestrate"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Interest Rate (%)
              </label>
              <input
                required
                type="number"
                id="interestrate"
                name="interestrate"
                value={loandetails.interestrate}
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
                htmlFor="loantenure"
                className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
              >
                Loan Tenure (Months)
              </label>
              <input
                required
                type="number"
                id="loantenure"
                name="loantenure"
                value={loandetails.loantenure}
                onChange={onchange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="p-2 w-11/12 sm:w-3/4">
          <div className="mb-4">
            <label
              htmlFor="loanpurpose"
              className="leading-7 text-md font-semibold text-black after:content-['*'] after:text-red-500"
            >
              Loan Purpose
            </label>
            <textarea
              required
              id="loanpurpose"
              name="loanpurpose"
              value={loandetails.loanpurpose}
              onChange={onchange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="mt-2 text-white flex-shrink-0 inline-flex bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded disabled:opacity-75"
        >
          Save <AiOutlineSave className="m-1 ml-2 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Loandetail;
