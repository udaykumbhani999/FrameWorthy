import React, { useEffect } from "react";
import "../Footer/Footer.scss";
import aos from 'aos';
import 'aos/dist/aos.css';

import Button from "../Button/Button";


import { ReactComponent as Logo } from "../../Assets/Images/Logo.svg";
import { ReactComponent as Facebook } from "../../Assets/Images/Facebook.svg";
import { ReactComponent as Instagram } from "../../Assets/Images/Instagram.svg";
import { ReactComponent as Twitter } from "../../Assets/Images/Twitter.svg";

export default function Footer() {
  useEffect(() => {
    aos.init({ duration:2000,});
  }, []);
  return (
    <footer className="footerpart">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="footer-sociyalpart">
              <div className="footer-icon">
                <Facebook />
              </div>
              <div className="footer-icon">
                <Instagram />
              </div>
              <div className="footer-icon">
                <Twitter />
              </div>
            </div>
            <div className="overview">
              <p className="copyright">© Fujifilm 2021. All right reserved</p>
              <a href="term" className="term">
                Terms and Conditions
              </a>
              <a href="help" className="help">
                Help and support
              </a>
            </div>
          </div>
          <div className="footer-form">
            <h4 data-aos="fade-up" className="footer-form__heading">Help and Support</h4>
            <div className="footer-form__input-wrap">
              <input type="text" id="fname" name="fname" placeholder="Enter Your Name" className="footer-form__input"/>
            </div>
            <div className="footer-form__input-wrap">
              <input type="email" id="email" name="email" placeholder="Enter Your Email" className="footer-form__input" />
            </div>
            <div className="footer-form__input-wrap footer-form__input-wrap--space">
              <textarea id="comments" name="comments" rows="4" placeholder="Comments" className="footer-form__input"></textarea>
            </div>
            <div className="footer-form__btn">
              <Button BtnData={'Submit'} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
