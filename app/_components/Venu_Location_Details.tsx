import React from 'react'
import { Globe, CalendarCheck2, MapPin } from 'lucide-react';
const Venu_Location_Details = () => {
  return (
    <div className='flex flex-col sm:flex-row text-white pt-3 gap-3 text-[15px]'>
    <div className='flex flex-row gap-x-2 items-center'>
      <Globe size={17}/>
<div>New Delhi, India</div>
    </div>
    <div className=' w-0 sm:w-[1px] sm:h-5 border-white bg-white'></div>
    <div className='flex flex-row gap-x-2 items-center'>
      <CalendarCheck2 size={17}/>
<div>12th Jul 2024-15th July 2024</div>
    </div>
    <div className='w-0 sm:w-[1px] sm:h-5 border-white bg-white '></div>
    <div className='flex flex-row gap-x-2 items-center'>
      <MapPin size={17}/>
<div>Hall-2, Booth 23</div>
    </div>
  </div>
  )
}

export default Venu_Location_Details