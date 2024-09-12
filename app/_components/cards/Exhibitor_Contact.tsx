import React from 'react';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

const ContactDetail = ({ label, value, link }:{label:string, value:string , link?:string}) => (
  <div className='flex flex-col sm:flex-row'>
    <div className='w-[140px] font-medium text-[#888888]'>{label}</div>
    <div className={`w-[236px] text-[#5a5a5a] font-semibold ${link ? 'text-blue-500' : ''}`}>
      {link ? <Link href={link}>{value}</Link> : value}
    </div>
  </div>
);

const SocialIcon = ({ Icon, color }:{Icon:any, color:string}) => (
  <Icon style={{ color }} />
);

const Exhibitor_Contact = () => {
  return (
    <div className=' w-full'>
      <div className="bg-[#ffffff] w-full flex flex-col p-6 px-10 rounded-md">
        <div className='text-[20px] font-bold'>Exhibitor Contact</div>

        <div className='flex flex-col gap-y-4 pt-8'>
          <ContactDetail label="Name" value="Rajesh Kumar" />
          <ContactDetail label="Email" value="Rajeshkumar@gmail.com" />
          <ContactDetail label="Phone" value="+91 6230126530" />
          <ContactDetail
            label="Address"
            value="B702, Pramukh Plaza, Cardinal Gracious Rd, near Western Express Metro Station, Andheri East, Mumbai, Maharashtra 400059"
          />
          <ContactDetail
            label="Website"
            value="www.zolonihere.com"
            link="/"
          />
          <div className='flex flex-col sm:flex-row'>
            <div className='w-[140px] font-medium text-[#888888]'>Social</div>
            <div className='flex flex-row gap-4'>
              <SocialIcon Icon={Facebook} color='#3d5a98' />
              <SocialIcon Icon={WhatsApp} color='#7edd85' />
              <SocialIcon Icon={Instagram} color='#ed4c63' />
              <SocialIcon Icon={XIcon} color='#000000' />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row pt-8'>
            <button className='bg-[#9039e7] w-full sm:w-[400px] rounded-md h-10 text-white text-[20px] font-medium'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitor_Contact;
