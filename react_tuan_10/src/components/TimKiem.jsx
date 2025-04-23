import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="mb-4 flex items-center mt-30">
      <label htmlFor="search" className="block text-gray-700 text-sm font-bold mr-2">
        Tìm kiếm:
      </label>
      <input
        type="text"
        id="search"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Nhập tên sản phẩm..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
        onClick={handleSearchClick}
      >
        Tìm
      </button>
    </div>
  );
};

export default SearchInput;