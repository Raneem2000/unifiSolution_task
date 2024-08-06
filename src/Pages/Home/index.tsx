import React from 'react';
import Background from './Background';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import About from './About';

const index = () => {
  return (
    <div>
      <Topbar />
      <Background />
      <About/>
      <Footer />
    </div>
  );
};

export default index;
