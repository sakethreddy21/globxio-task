import React from 'react'

const exhibitions = [
  { name: 'Saudi Food Expo', date: '12 July - 18 July', shortName: 'Bon' },
  { name: 'Dubai Expo 2022', date: '22 Feb - 28 Feb', shortName: 'Dub' },
  { name: 'Global Food Fair', date: '5 Aug - 12 Aug', shortName: 'GFF' },
  { name: 'World AgriTech', date: '1 Mar - 7 Mar', shortName: 'Agri' },
  { name: 'World AgriTech', date: '1 Mar - 7 Mar', shortName: 'Agri' }
  // Add more exhibitions as needed
];

const Zoloni_Past_Exhibitions = () => {
  return (
    <div className=' w-full'>
      <div className="bg-[#ffffff] w-full flex flex-col p-6 px-10 rounded-md">
        <div className='text-[20px] font-bold'>Zoloni's Past Exhibitions</div>
        <div className='flex flex-col pt-4 gap-4'>
          {exhibitions.map((exhibition, index) => (
            <div key={index} className='flex flex-row items-center'>
              <div className='bg-[#898370] w-16 h-16 rounded-full flex justify-center items-center'>
                {exhibition.shortName}
              </div>
              <div className='flex flex-col py-1 px-4'>
                <div className='text-[20px] font-semibold'>{exhibition.name}</div>
                <div className='text-[14px]'>{exhibition.date}</div>
              </div>
            </div>
          ))}
           <div className='flex justify-center items-center underline text-[#902af6] text-[20px] font-semibold'>Show All</div>
        </div>
      </div>
    </div>
  );
}

export default Zoloni_Past_Exhibitions;
