import React,{useState, useEffect} from 'react';
import MyPageLink from '../myPage/page/MyPageLink';
import ConcertPageLink from '../concertPage/concertPageLink';
import IdolListPageLink from '../IdolListPage/IdolListPageLink';
import './MainPage.css';
import mainimg from '../src_asset/메인홈.png'
import MainNavbar from './MainNavbar';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import aboutbackgrond from '../src_asset/aboutbackground.png';
import klogo from '../src_asset/aboutlogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaChevronDown} from "react-icons/fa";



function MainPage() {

    
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
            <div className="about-kculter"
             data-aos="fade-up"
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
       </div>
  )
}
export default MainPage;