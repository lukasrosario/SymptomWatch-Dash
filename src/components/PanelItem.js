import React from 'react';
import AnimatedIcon from './AnimatedIcon';

const PanelItem = ({ iconFamily, icon, children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-white mb-4 cursor-pointer text-6xl">
        <AnimatedIcon iconFamily={iconFamily} icon={icon} />
      </span>
      <p className="font-roboto font-light text-2xl text-center text-white">
        {children}
      </p>
    </div>
  );
};

export default PanelItem;
