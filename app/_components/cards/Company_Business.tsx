import React from 'react';

const Company_Business = () => {
  const companyTypes = [
    'Contact Manufacturing',
    'Exports',
    'White Label Brands'
  ];

  const productCategories = [
    'Juices',
    'Vegetables',
    'Grain',
    'Grain', // Duplicate items
    'Grain'  // Duplicate items
  ];

  const productItems = [
    'Item 01',
    'Item 02',
    'Item 03',
    'Item 04',
    'Item 05'
  ];

  const renderList = (items: string[]) => (
    items.map((item:string, index:number) => (
      <div key={index} className='px-5 p-2 rounded-3xl border-[2px] border-[#dbdbdb] shadow-lg'>
        {item}
      </div>
    ))
  );

  return (
    <div className=' w-full'>
    <div className="bg-[#ffffff]  w-full  flex flex-col p-6 rounded-md">
      <div className='text-[20px] font-bold'>Company's Business</div>

      <div className='flex flex-col gap-y-4 pt-8'>
        <div className='flex flex-col'>
          <div className='text-[15px] font-semibold'>Company Type</div>
          <div className='flex flex-wrap text-[14px] gap-4 p-2 pt-4 '>
            {renderList(companyTypes)}
          </div>
        </div>
        
        <div className='flex flex-col'>
          <div className='text-[15px] font-semibold'>Product Categories</div>
          <div className='flex flex-wrap text-[14px] gap-4 p-2 pt-4'>
            {renderList(productCategories)}
          </div>
        </div>
        
        <div className='flex flex-col'>
          <div className='text-[15px] font-semibold'>Products Items</div>
          <div className='flex flex-wrap text-[14px] gap-4 p-2 pt-4'>
            {renderList(productItems)}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Company_Business;
