import React, { useEffect } from 'react';
import '../Button/Button.scss';
import aos from 'aos';
import 'aos/dist/aos.css';

import { ReactComponent as Aerrow } from "../../Assets/Images/Aerrow.svg";



export default function Button({ BtnData }) {
  useEffect(() => {
    aos.init({ duration:2000,offset: 120,delay:50 });
  }, []);
  return (
    <button data-aos="fade-up" className='submit-btn' type="submit" value="Submit"><span className='btndata'>{BtnData}</span> 
        <span className='submit-aerrow'>
            <Aerrow />
        </span> 
    </button>
  )
}
