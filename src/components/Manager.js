import React, { useState } from 'react';
import Tabs from './Tabs';
import Inventory from './Inventory';
import Search from './Search';
import FilterButton from './FilterButton';

const Manager = () => {
  const [active, setActive] = useState('inventory');

  return (
    <div className="flex flex-col w-11/12 px-4 overflow-hidden">
      <div className="flex flex-row justify-around py-4">
        <Search />
        <FilterButton />
      </div>
      <Inventory active={active} />
    </div>
  );
};

export default Manager;
