import React from 'react';
import './Register.css';
import Brian from '../../imgs/Brain.png';
import webDesign from '../../imgs/WebDesign.png';
import Child from '../../imgs/Child.png';
import DataScience from '../../imgs/DATASCIENCE.png';
import Programming from '../../imgs/Programming.png';
const Register = () => {
  return (
    <div className="RegClass">
      <div className="box1">
        <div className="box2" />

        <img src={Brian} id="img1" alt="Brain" />
      </div>
      <div className="box3" />
      <img src={webDesign} id="img2" alt="webDesign" />
      <div className="box4" />
      <div className="bigBox">
        <div className="boxName">
          <div className="boxUserName">
            <p className="p1">userName</p>
          </div>
        </div>
        <div className="box5" />
        <div className="bigBoxEmail">
          <div className="boxEmail">
            <p className="p2">Email</p>
          </div>
        </div>
        <div className="box6" />
        <div className="bigBoxUinvercity">
          <div className="boxUinvercity">
            <p className="p3">Uinvercity</p>
          </div>
        </div>
        <div className="box7" />
        <div className="bigBoxPassword">
          <div className="boxPassword">
            <p className="p4">Password</p>
          </div>
        </div>
        <div className="box8" />
        <div className="bigBoxSubmit">
          <div className="boxSubmit">
            <p className="p5">Submit</p>
          </div>
        </div>
      </div>
      <div className="boxImg3" />
      <img src={Child} id="img3" alt="Child" />
      <div className="box9" />
      <div className="boxIm">
        <div className="boxstyle" />
        <div className="boxImg4" />
        <img src={DataScience} id="Img4" alt="DataScience" />
      </div>
      <div className="box10" />
      <div className="boxim2">
        <div className="box8" />
        <img src={Programming} id="img5" alt="Programming" />
      </div>
      <div className="I" />
      <div className="II" />
    </div>
  );
};

export default Register;
