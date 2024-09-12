import React from 'react'
import Heading from './Heading';
import Venu_Location_Details from './Venu_Location_Details';
import { Pencil } from 'lucide-react';
const companies = [
    {
        companyName: "Zoloni",
        department: "Research & Development",
        logo: "any logo link"
    },
    {
        companyName: "Bhart Food Tech 2024",
        department: "New Delhi, India",
        logo: "any logo link"
    },
];

const Header = () => {
  return (
    <div className="flex flex-col px-4 sm:px-24 py-12">
      <div className="flex flex-row space-x-3 items-center">
        {companies.map((company, index) => (
          <React.Fragment key={index}>
            <div className='flex flex-row'>
              <div className='flex items-center w-10 h-10 border-white border'><img 
                src='/images/hero-logo.png' 
                alt='chart' 
                className="w-full h-full object-cover rounded-md"
              /></div>
              <div className='hidden md:block  flex-col pl-4'>
  <div className='text-white font-semibold'>{company.companyName}</div>
  <div className='text-[12px] text-white'>{company.department}</div>
</div>
            </div>
            {index !== companies.length - 1 && (
                <div className='px-2 sm:px-4'>
                    <div className=' w-[1px] h-10 border-white bg-white'></div>
                </div>
              
            )}
          </React.Fragment>
        ))}
      </div>
      <Heading/>
      <Venu_Location_Details/>
      <div className='pt-10 w-full '>
     <button className='flex p-6 justify-center items-center bg-[#9039e7] w-full sm:w-[400px] rounded-lg h-10 text-white text-[20px] font-medium '>
  {/* Show "Edit Your Profile" on mobile and "Contact Us" on larger screens */}
  <span className=" flex flex-row gap-3 justify-center items-center  sm:hidden "><Pencil size={14}/>Edit Exhibition Profile</span>
  <span className="hidden sm:block">Contact Us</span>
</button>

      </div>
     
    </div>
  )
}

export default Header;
