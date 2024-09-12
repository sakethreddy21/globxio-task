import React from 'react';

const Footer = () => {
  return (
    <div className='relative bg-[#12002e] bottom-0 text-white py-4 w-full flex justify-center items-center'>
      <p className='text-sm'>
        © {new Date().getFullYear()} Globixo. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
