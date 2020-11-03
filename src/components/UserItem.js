import React from 'react';

const UserItem = ({
  name,
  lastUpload,
  cough,
  breath,
  fever,
  throat,
  email
}) => {
  const symptomCount = [fever, cough, breath, throat].reduce(
    (a, v) => (v === 'yes' ? a + 1 : a),
    0
  );

  let bgColor = 'bg-green-200';
  if (symptomCount >= 1) {
    bgColor = 'bg-yellow-200';
  }
  if (symptomCount >= 3) {
    bgColor = 'bg-red-200';
  }
  return (
    <div
      className={`w-full flex flex-col border-b-4 border-gray-400 ${bgColor}`}
    >
      <div className="w-full flex flex-row divide-x divide-gray-700">
        <div className="w-2/12 whitespace-no-wrap overflow-hidden">
          <p className="font-roboto capitalize py-2 text-lg pl-4 text-gray-600">
            {name}
          </p>
        </div>
        <div className="w-2/12 whitespace-no-wrap overflow-hidden">
          <p className="font-roboto capitalize py-2 text-lg pl-4 text-gray-600">
            {lastUpload}
          </p>
        </div>
        <div className="w-2/12 whitespace-no-wrap overflow-hidden">
          <p className="font-roboto capitalize py-2 text-lg pl-4 text-gray-600">
            {cough}
          </p>
        </div>
        <div className="w-2/12 whitespace-no-wrap overflow-hidden">
          <p className="font-roboto capitalize py-2 text-lg pl-4 text-gray-600">
            {breath}
          </p>
        </div>
        <div className="w-2/12 whitespace-no-wrap overflow-hidden">
          <p className="font-roboto capitalize py-2 text-lg text-gray-600 text-center">
            {fever}
          </p>
        </div>
        <div className="w-2/12 whitespace-no-wrap overflow-hidden">
          <p className="font-roboto capitalize py-2 text-lg text-gray-600 text-center">
            {throat}
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-end">
        <div className="flex flex-row w-1/6 justify-end pt-4 pb-2">
          <div className="w-1/2 flex justify-center items-center">
            <form method="post" action={`mailto:${email}`}>
              <input
                type="submit"
                className={`${bgColor} font-roboto text-lg border-b-2 text-gray-600 border-gray-500 hover:text-purple-900 hover:border-purple-900 px-2`}
                value="Contact"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
