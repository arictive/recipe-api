import React from 'react'

const Form = () => (
  <div>
    <div className="flex justify-center items-center p-6 space-x-6 bg-white rounded-xl">
      <form className="flex justify-between bg-gray-100 border-2 border-gray-100 focus-within:border-indigo-200 p-3 w-10/12 space-x-4 rounded-full">
        <div className="flex space-x-6 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30 mt-3 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input className="bg-gray-100 outline-none w-full" type="text" placeholder="Grilled chicken, avocado, mlik or keyword..." />
        </div>
        <button className="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-full hover:bg-indigo-800 transition">
          <span>Search</span>
        </button>
      </form>
    </div>
  </div>
)

export default Form;
