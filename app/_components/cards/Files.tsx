import React from 'react'

const filesData = [
  { id: 1, name: 'File Name 01', src: '/images/charts.png' },
  { id: 2, name: 'File Name 02', src: '/images/charts.png' },
  { id: 3, name: 'File Name 03', src: '/images/charts.png' }
];

const Files = () => {
  return (
    <div className='w-full pb-20'>
      <div className="bg-[#ffffff] px-10 w-full flex flex-col p-6 rounded-md gap-6">
        <div className='text-[20px] font-bold'>Files</div>
        
        <div className='flex flex-col sm:flex-row w-full gap-4'>
          {filesData.map(file => (
            <div key={file.id} className='flex flex-col w-full rounded-md border border-[#dbdbdb] p-4 shadow-lg'>
              <img 
                src={file.src} 
                alt={file.name} 
                className="w-full h-40 object-cover rounded-md"
              />
              <div className='flex justify-center items-center p-2 text-[15px] font-semibold'>
                {file.name}
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center underline text-[#902af6] text-[20px] font-semibold'>Show All</div>
      </div>
    </div>
  )
}

export default Files
