import React from 'react'
import { UserRound, Phone, Mail} from 'lucide-react';
const Members_data = [
    { name: 'Aditi Sharma', title: 'Marketing Head', phnNum:'+91 9999999999', email:'sakeh@email.com' },
    { name: 'Dubai Expo 2022',  title: 'Marketing Head', phnNum:'+91 9999999999', email:'sakeh@email.com' },
    { name: 'Global Food Fair', title: 'Marketing Head', phnNum:'+91 9999999999', email:'sakeh@email.com'},

    // Add more exhibitions as needed
  ];
const Members = () => {
  return (
    <div className=' w-full'>
      <div className="bg-[#ffffff] w-full flex flex-col p-4 px-10 rounded-md">
        <div className='text-[20px] font-bold'>Members</div>
        <div className='flex flex-col pt-4 gap-4'>
          {Members_data.map((member, index) => (
        <div className='flex flex-col  border border-[#dbdbdb] rounded-md p-2 gap-3'>
            <div key={index} className='flex flex-row items-center '>
              <div className='bg-[#898370] w-10 h-10 rounded-full flex justify-center items-center'>
               <UserRound/>
              </div>
              <div className='flex flex-col py-1 px-4'>
                <div className='text-[15px] font-semibold'>{member.name}</div>
                <div className='text-[12px] '>{member.title}</div>
              </div>
            </div>
            <div className='flex flex-row gap-4'>
             <div className='flex flex-row gap-2 items-center'>
                <Phone color='#909090' size={20}/>
                <div className='text-[12px] sm:text-[14px]'>{member.phnNum}</div>
             </div>
             <div className='flex flex-row gap-2 items-center'>
                <Mail color='#909090' size={20}/>
                <div  className='text-[12px] sm:text-[14px]'>{member.email}</div>
             </div>
            </div>
            </div>
          ))}
           <div className='flex justify-center items-center underline text-[#902af6] text-[20px] font-semibold'>Show All</div>
        </div>
      </div>
    </div>
  )
}

export default Members