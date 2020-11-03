import React from 'react';

const Categories = () => {
  return (
    <div className="flex py-3 flex-row w-full divide-x divide-gray-700 bg-purple-200 rounded-md rounded-b-none">
      <div className="w-2/12">
        <p className="font-roboto text-xl pl-4 text-gray-600">Name</p>
      </div>
      <div className="w-2/12">
        <p className="font-roboto text-xl pl-4 text-gray-600">Last Upload</p>
      </div>
      <div className="w-2/12">
        <p className="font-roboto text-xl pl-4 text-gray-600">Cough</p>
      </div>
      <div className="w-2/12">
        <p className="font-roboto text-xl pl-4 text-gray-600">
          Shortness of Breath
        </p>
      </div>
      <div className="w-2/12">
        <p className="font-roboto text-xl pl-4 text-gray-600">Fever</p>
      </div>
      <div className="w-2/12">
        <p className="font-roboto text-xl pl-4 text-gray-600">Sore Throat</p>
      </div>
    </div>
  );
};

export default Categories;
