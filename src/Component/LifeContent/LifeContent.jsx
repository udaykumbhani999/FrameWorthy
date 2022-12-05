import React, { useEffect } from 'react';
import "../LifeContent/LifeContent.scss";
import aos from 'aos';
import 'aos/dist/aos.css';

import Button from "../Button/Button";

export default function LifeContent({ lifeheading, lifepara_first, Lifepara_second }) {
  useEffect(() => {
    aos.init({ duration:2000 });
  }, []);
  return (
    <div className='content'>
          <h2 data-aos="fade-up" className='lifeheading'>{lifeheading}</h2>
          <p data-aos="fade-up" className='lifepara_first'>{lifepara_first}</p>
          <p data-aos="fade-up"className='lifepara_second'>{Lifepara_second}</p>
          <div className='lifebtn'>
            <Button BtnData={'View Gallery'}/>
          </div>
    </div>
  )
}
