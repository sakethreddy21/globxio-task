import React from 'react'

const filesData = [
  { id: 1, name: 'Gourmet Haven Foods', src: '/images/charts.png' },
  { id: 2, name: 'TasteQuest Creations', src: '/images/charts.png' },
  { id: 3, name: 'FreshFusion Delights', src: '/images/charts.png' },
  { id: 4, name: 'Epicurean Bites Co.', src: '/images/charts.png' },
  { id: 5, name: 'FlavourScape Foods', src: '/images/charts.png' }
];

const Sponsors = () => {
  return (
    <div className='w-full'>
      <div className="bg-[#ffffff] px-10 w-full flex flex-col p-6 rounded-md gap-6">
        <div className='text-[20px] font-bold'>Members</div>
        
        <div className='flex flex-col sm:flex-row w-full gap-4'>
          {filesData.map(file => (
            <div>
            <div key={file.id} className='flex flex-col w-full rounded-md border  bg-[#dbdbdb] p-4 shadow-lg'>
              <img 
                src={file.src} 
                alt={file.name} 
                className="w-full h-40 object-cover rounded-md"
              />
             
            </div>
             <div className='flex justify-center items-center p-2 text-[15px] font-semibold'>
             {file.name}
           </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
