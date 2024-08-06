import React from 'react';
import logo from '../assets/InnerLogo.svg';
type props = {
  title: string;
};
const TitlewithLogo: React.FC<props> = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="font-[700] text-[50px] text-primary">{title}</div>
      <img src={logo} />
    </div>
  );
};

export default TitlewithLogo;
