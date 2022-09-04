import React, {useEffect,useState} from 'react';
// import aboutbackgrond from '../src_asset/aboutbackground.png';
import klogo from '../src_asset/aboutlogo.png'
import kpin from '../src_asset/nctpin.png'
import kpin2 from '../src_asset/hanbokpin.png'
import kpin3 from '../src_asset/blackpin.png'
import kpin4 from '../src_asset/twipin.png'
import kmap from '../src_asset/map.png'
import klist from '../src_asset/list.png'

import styles from './Aboutus.module.css';
import Loginlogo from '../login/presentation/Loginlogo';
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FaChevronDown} from "react-icons/fa";
import { Button } from '../main/Button';
import MainNavbar from '../main/MainNavbar';
import { map } from 'lodash';

function Aboutus(){

  const [login,setlogin] = useState(false);

  useEffect(() => {
    AOS.init();
  })
  return(
    <div className={styles.background}>

    <div className={styles.aboutCon}>
      {/* <img src={aboutbackgrond}></img> */}
      <div className={styles.aboutTop}>
      <MainNavbar />
      </div>
      <div className={styles.gridContainer}>
          <div className={styles.mainLogo}>
              <img src={klogo} data-aos="zoom-in"
              data-aos-duration="2000"
              />
          </div>
          <div className={styles.aboutKculter}
            data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          >
              <span id={styles.travel}>
              Travel Helper 
              </span><br></br>
              <div className={styles.korean}>
                <span id={styles.tokorea}>to Korea for</span>
                <span id={styles.kpop}>KPOP</span> 
                <span>Fans</span>
              </div>
          </div>
          <div>
            <FaChevronDown className={styles.chevron} size="40"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1400"
            />
          </div>
          <div className={styles.mainbtn2}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1200">
            <Button/>
          </div>
      </div>

        {/* 
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
       

          <span className="location-service"
            data-aos="fade-up"
            data-aos-duration="2000"
          >Travel Service for<span id="location-kpop">KPOP</span>fans</span>
         
          <div className="location-p"
                data-aos="fade-left"
                data-aos-duration="2000"
          >
         <p>
         It is a service that helps you to enjoy <br></br>your trip to Korea comfortably by traveling to places <br></br>where you have been and lived by your favorite K-pop singer, <br></br>which you have only seen on TV.<br></br>
It helps you experience not only K-pop singers <br></br>but also representative tourist attractions and culture in Korea.
         </p>
         <p>I hope you have a fun trip to Korea with the k-culter.</p>
        </div>
        
         <div>
          </div>
        


         
          <div className="kpop-pin"
            data-aos="fade-left"
            data-aos-duration="2000"
          >        
          <span>
          Mark places related <br></br>to kpop stars<br></br> on the map
          </span>
          <img src={kpin}></img>
       </div>
       <div className="kpop-pin2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >        
          <span>
          Mark places related <br></br>to kpop stars<br></br> on the map
          </span>
          </div>

      <div className="form2-img2"
         data-aos="fade-left"
         data-aos-duration="2000">
        <img src={klist}></img>

      </div>
    
      <div className="form2-list"
          data-aos="fade-left"
          data-aos-duration="2000">
       <span id="k-map">List</span>

       If you select idol from the idol list, <br></br>the location pin displays music video locations, pictorials, <br></br>and recommended restaurants for a specific idol star<br></br>
    
       </div>

       <div className="form2-img1"
         data-aos="fade-left"
         data-aos-duration="2000">
        <img src={kmap}></img>
      </div>

       <div className="form2-map"
          data-aos="fade-left"
          data-aos-duration="2000">

      
       <span id="k-map">Map</span>

       맵 에 대한 설명 <br></br>the location pin displays music video locations, pictorials, <br></br>and recommended restaurants for a specific idol star<br></br>
    
       </div>
        */}
       </div>
    </div>
  )
}

export default Aboutus;