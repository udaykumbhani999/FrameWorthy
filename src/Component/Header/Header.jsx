import React, { useEffect } from 'react';
import '../Header/Header.scss';
import aos from 'aos';
import 'aos/dist/aos.css';
// import "../../../node_modules/aos/src/sass/aos";

import { ReactComponent as Logo } from "../../Assets/Images/Logo.svg";


import Button from "../Button/Button";


export default function Header() {
    useEffect(() => {
        aos.init({ duration:2000,delay:50, offset: 20, });
      }, []);
  return (
    <header data-aos="fade-down" className='header-part'>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='header-logo'>
                    <a href="/" className='logo-link'>
                        <Logo />
                    </a>
                </div>
                <div className='submit'>
                    <Button BtnData={'Submit a Photo'}  />
                </div>
            </div>
        </div>
    </header>
  )
}
