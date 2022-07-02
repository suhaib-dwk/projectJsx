import React from 'react';
import './Page2.css';
import MainDash from '../MainDash/MainDash';
import RightSide from '../RigtSide/RightSide';
import Sidebar from '../Sidebar/Sidebar';

function Page2() {
  return (
    <div className="Page2">
      <div className="Page2Class">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default Page2;
