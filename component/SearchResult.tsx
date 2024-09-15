import React from 'react';
import ProductCart from './ProductCart';

const SearchResult = ({ filterData }: { filterData: any }) => {
  return (
    <div className='w-[80%] mx-auto'>
      <div className='mt-10'>
        <div className='flex items-center'>
          <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {filterData?.map((product: any) => (
            <div key={product.id}>
              <ProductCart product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
