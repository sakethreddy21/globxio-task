import React from 'react'

const Videos_images = () => {
  return (
    <div className=' w-full'>
      <div className="bg-[#ffffff] px-10 w-full flex flex-col p-6 rounded-md gap-10">
        <div className='text-[20px] font-bold'>Videos & Images</div>

        <div className='flex flex-col gap-8'>
          {/* First row */}
          <div className="flex flex-col sm:flex-row w-full h-auto gap-4">
            <div className="flex sm:w-[60%] h-[200px]">
              {/* Image with object-fit */}
              <img 
                src='/images/charts.png' 
                alt='chart' 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex sm:w-[40%] h-[200px]">
              <img 
                src='/images/logo-dark.png' 
                alt='logo-dark' 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-col sm:flex-row w-full h-auto gap-4">
            <div className="flex sm:w-[60%] h-[200px]">
              <img 
                src='/images/logo-dark.png' 
                alt='chart' 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex sm:w-[40%] h-[200px]">
              <img 
                src='/images/sation-post.png' 
                alt='sation' 
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className='flex justify-center items-center underline text-[#902af6] text-[20px] font-semibold'>Show All</div>
        </div>
      </div>
    </div>
  )
}

export default Videos_images
