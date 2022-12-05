import React, { useEffect } from "react";
import "../Prizes/Prizes.scss";
import aos from 'aos';
import 'aos/dist/aos.css';

import Button from "../Button/Button";

import { Image } from "../../Assets/Image";

export default function Prizes() {
  useEffect(() => {
    aos.init({ duration:2000,delay:50 });
  }, []);
  return (
    <section className="prizespart">
      <div className="container">
        <div className="prizes-wrapper">
        <div className="lineshape">
          <div className="linetext">
            <p className="line_texts">10 Winners</p>
          </div>
          <div className="line-img">
            <svg
              viewBox="0 0 212 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="greenline"
                d="M182.482 78.0528C185.407 79.8397 193.625 72.792 195.106 71.6448C196.416 70.6113 197.846 69.3393 199.808 70.4167C201.952 71.5848 201.918 74.8426 202.285 76.6132C203.156 81.0169 204.159 85.3866 204.809 89.7792C205.108 91.913 203.074 91.8911 202.514 89.8255C201.649 86.3185 201.916 83.1263 201.005 78.952C200.432 76.3256 199.806 72.6981 198.817 72.4034C198.635 72.3127 194.181 75.5499 194.181 75.5499C191.18 77.9237 181.958 80.4708 181.958 80.4708L181.703 79.7339C181.703 79.7339 181.588 79.2798 181.577 79.0755C181.581 78.3831 182.403 78.0044 182.482 78.0528Z"
                fill="#8AC926"
              />
              <path
                className="greenline"
                d="M196.5 80.8185C186.5 115.818 131.417 163.014 64.3764 133.736C-19.4248 97.1383 55.1733 36.836 75.1747 81.8353C91.1759 117.835 52.2431 136.303 30.7766 141.037"
                stroke="#8AC926"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="lineshapeaerrow">
          <div className="line-img">
          <svg width="101" height="106" viewBox="0 0 101 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="green-line" d="M87.225 91.8179C11.225 88.3179 -3.10833 30.4845 4.225 0.817871C0.224975 9.81787 -1.02923 19.8476 6.22495 43.8179C17.7249 81.8179 66.2249 91.4179 87.225 91.8179Z"  stroke="#8AC926" stroke-linecap="round" strokeWidth="2" stroke-linejoin="bevel"/>
            <path className="green-line" d="M81.4214 98.7783C83.7388 97.6748 86.209 96.8993 88.5929 95.9807C89.7231 95.5434 90.8534 95.106 91.9639 94.7105C92.4772 94.4929 95.3641 93.8123 95.4757 93.2511C95.5524 92.9805 93.0652 91.1899 92.7473 90.886C91.8378 90.0976 90.9283 89.3092 90.0189 88.5208C88.2221 87.0057 85.8036 85.5034 84.6364 83.4164C84.2055 82.7009 84.9118 81.8584 85.6861 82.1735C87.1508 82.7642 88.2769 83.962 89.4624 85.0345C90.7958 86.228 92.1908 87.3996 93.5242 88.5932C94.7935 89.7053 98.1958 91.6219 97.8286 93.6992C97.459 95.6731 93.6745 96.0826 92.1519 96.5901C88.7588 97.7986 85.3506 99.2559 81.8665 100.114C80.9609 100.402 80.56 99.1894 81.4214 98.7783Z" fill="#8AC926"/>
            </svg>
          </div>
          <div className="linetext">
            <p className="line_texts">25% Off</p>
          </div>
        </div>
          <div className="white-bg"></div>
          <div className="prizes-left">
            <div className="prizes-bg">
              <div className="prizes-image">
                <img
                  src={Image.Prizesimg}
                  alt="Prizesimg"
                  className="Prizesimg"
                />
              </div>
            </div>
          </div>
          <div className="prizes-right">
            <p className="P-text">Prizes</p>
            <h2 data-aos="fade-up" className="prizes-heading">Sweepstakes Prizes 
            <span> 
            <img src={Image.Sketch} alt='Sketch' className='Sketchimg'/>
            </span>
            </h2>
            <p data-aos="fade-up" className="prizes-selected">
              10 randomly selected winners will each receive…{" "}
            </p>
            <div className="prizes-card">
              <div className="card-wrapper">
                <div className="btn-border">
                  <button className="gift-btn">
                    $100 <br /> Gift Card
                  </button>
                </div>
                <div className="card-text">
                  <p className="card-content">
                    <span className="card-black-text">
                      To Fujifilm Printlife <br /> & (1) Photo* in
                    </span>
                    <span className="card-green-text">11x14 Metal Print</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="offer-text">
              <p className="offer-para">
                <span className="Bernhard-text">
                  All entrants of the FrameWorthy From Home photo sweepstakes{" "}
                  <br className="break" /> will receive a{" "}
                </span>
                <span className="Caveat-text">25% off special offer </span>
                <span className="Bernhard-text">use on purchases at</span>
                <br />
                <span className="poppins-text">fujifilmprintlife.ca</span>
              </p>
            </div>
            <p className="print-text">
              <span className="greenstar">*</span>Winners with multiple photo
              submissions can choose which of their photos they’d like to have
              in print{" "}
            </p>
            <div className="prizes-btn">
              <Button BtnData={"Know More About Prizes and Rules"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
