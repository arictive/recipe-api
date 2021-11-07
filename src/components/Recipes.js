import React from 'react';

const Recipes = props => (
  <div className="flex justify-center bg-gray-50 p-6 -mt-16 h-max">
    <div className="pt-16 grid grid-cols-4 gap-6 w-10/12">
      {props.recipes.map((recipe) => {
        return (
          <div key={recipe["recipe"]["uri"]} className="bg-white border-l border-r border-b border-gray-300 shadow-sm">
            <img src={recipe["recipe"]["image"]} className="object-cover h-36 w-full" />
            <div className="p-4">
              <h1 className="text-left font-semibold">{recipe["recipe"]["label"].length < 23 ? `${recipe["recipe"]["label"]}` : `${recipe["recipe"]["label"].substring(0, 23)}...`}</h1>
              <p className="text-left text-sm font-semibold text-gray-400">{(recipe["recipe"]["yield"])} servings</p>
              <p className="text-left font-bold text-xl pt-2">{(recipe["recipe"]["calories"] / recipe["recipe"]["yield"]).toFixed(0)} <span className="font-base text-sm">kcal/s</span></p>
            </div>
            <div className="bg-gray-100 px-4 py-3">
              <div className="flex space-x-4 text-left text-sm w-full">
                <div className="flex">
                  <svg className="mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" fill="#10b981" width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" /><text x="6" y="20" fontSize="22" fill="white">P</text></svg>
                  {(recipe["recipe"]["digest"]["2"]["total"]).toFixed(0)} g
                </div>
                <div className="flex">
                  <svg className="mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" fill="#f59e0b" width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" /><text x="4" y="20" fontSize="22" fill="white">C</text></svg>
                  {(recipe["recipe"]["digest"]["1"]["total"]).toFixed(0)} g
                </div>
                <div className="flex">
                  <svg className="mt-1 mr-1" xmlns="http://www.w3.org/2000/svg" fill="#ef4444" width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" /><text x="6" y="20" fontSize="22" fill="white">F</text></svg>
                  {(recipe["recipe"]["digest"]["0"]["total"]).toFixed(0)} g
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;