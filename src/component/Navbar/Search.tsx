import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Search: React.FC = () => {
  const [valueSearch, setValueSearch] = useState('');
  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.startsWith(' ')) {
      return;
    }
    setValueSearch(e.target.value);
  };
  return (
    <div className="w-80 h-10 relative">
      <input
        className="w-full h-full rounded-xl focus:outline-none focus:ring focus:ring-violet-300 text-black p-5"
        placeholder="Nhập tìm kiếm ở đây"
        value={valueSearch}
        onChange={handleOnChangeSearch}
      />
      <div className="cursor-pointer w-10 h-full absolute top-1/2 right-0 -translate-y-1/2 flex justify-center items-center before:absolute before:block before:border-r border-neutral-500 before:top-0 before:left-0 before:bottom-0">
        <FontAwesomeIcon icon={faSearch} className="text-black" />
      </div>
    </div>
  );
};

export default Search;
