import React, { useState } from 'react';
import { CountryProps } from '../utils/types/Types';
import { Button } from 'antd';

const Pagination:React.FC<{ countries: CountryProps[] }> =({ countries })=> {
  const pageSize = 5;
  
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(countries.length / pageSize);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const visibleCountries = countries.slice(startIndex, endIndex);

  return (
    <div className='w-full h-fullflex justify-around'>
      <div>
        {visibleCountries.map((country,index) => (
          <div key={index}>{country?.country_name}</div>
        ))}
      </div>
      <div>
        <div className='flex justify-end items-center'>
        <Button className='w-20 h-7 bg-green-400 m-2 flex justify-center items-center' onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <span>{currentPage}</span>
        <Button className='w-20 h-7 bg-green-400 m-2 flex justify-center items-center' onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
