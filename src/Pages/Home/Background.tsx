import React from 'react';
import image from '../../assets/background-home.svg';
import janzeer from '../../assets/janzeer.svg';

const Background = () => {
  return (
    <div className="relative w-full h-screen">
    <img 
      src={image} 
      className="w-screen h-auto max-h-[90vh] object-cover" // ضبط أبعاد الصورة
      alt="Background Image" 
    />
    <img 
      src={janzeer} 
      className="absolute top-0 left-8 h-[450px]" 
      alt="Foreground Image"
    />
  
    <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 flex flex-col font-[700] text-[66px] leading-[103px] text-center p-2 rounded-md">
      <span className="text-gold">الأكاديمية العربية</span>
      <span className="text-white ">للاتصالات اللاسلكية والاستغاثات البحرية</span>
    </div>
  </div>
  
  );
};

export default Background;
