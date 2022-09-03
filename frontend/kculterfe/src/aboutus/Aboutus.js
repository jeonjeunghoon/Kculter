import React, {useEffect,useState} from 'react';
import aboutbackgrond from '../src_asset/aboutbackground.png';
import klogo from '../src_asset/aboutlogo.png'
import './Aboutus.css';
import Loginlogo from '../login/presentation/Loginlogo';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaChevronDown} from "react-icons/fa";
import { Button } from '../main/Button';
import MainNavbar from '../main/MainNavbar';

function Aboutus(){

  const [login,setlogin] = useState(false);

  useEffect(() => {
    AOS.init();
  })
  return(
    <div className="about-con">
      <img src={aboutbackgrond}></img>
      
      <div className="about-top">
      <MainNavbar className='MainNav'/>
      </div>
          <img id="main-logo" src={klogo} data-aos="zoom-in"
          data-aos-duration="2000"
          />
            <div className="about-kculter" data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            >
              <span id="travel">
          Travel Helper 
          </span><br></br>
          <div className="korean">
          <span id="tokorea">to Korea for</span>
          <span id="kpop">KPOP </span> 
          <span>Fans</span>
          </div>
          </div>
          <div className='mainbtn2'
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1200">
          <Button/>
          </div>
       <FaChevronDown className="chevron" size="40"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="1400"
       />
       <div className="whoweare"
       data-aos="fade-right"
       data-aos-duration="2000"
       >
          <span>Who</span>
          <span id="WE">We</span>
          <span>Are</span>
       </div> 
       <div className="whoweare2"
       data-aos="fade-right"
       data-aos-duration="2000"
       >
          <span>Who</span>
          <span id="WE">We</span>
          <span>Are</span>
       </div> 
</div>
  )
}

export default Aboutus;