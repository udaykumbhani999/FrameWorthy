import React, { useEffect } from "react";
import "../Winner/Winner.scss";
import aos from 'aos';
import 'aos/dist/aos.css';

import WinnerSlider from "../WinnerSlider/WinnerSlider";

import { ReactComponent as Account } from "../../Assets/Images/Account.svg";
import { ReactComponent as Location } from "../../Assets/Images/Location.svg";

export default function Winner() {
  useEffect(() => {
    aos.init({ duration:2000 });
  }, []);
  return (
    <section className="winnerpart">
      <div className="winner-top">
        <p className="p-text">Lorem Winner</p>
        <h2 data-aos="fade-up" className="winner-heading">Photos of the lorem</h2>
      </div>
      <div className="Winner-bottom">
        <div className="container">
          <div className="wrapp">
            <div className="winner-wrapper">
              <div className="slider-iamges">
                <WinnerSlider />
                <div className="Winner-content">
                  <div className="content-wrapper">
                    <div className="content-left">
                      <h3 className="heading-three">Lorem Name Unsplash</h3>
                      <div className="sub-content">
                        <div className="account">
                          <Account />
                        </div>
                        <div className="account-details">
                          <p className="account-name">Talan Baptista</p>
                          <div className="account-location">
                            <div className="location-img">
                              <Location />
                            </div>
                            <p className="location">Location</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="winner-end">
            <div className="lineimage">
              <svg
                width="164"
                height="135"
                viewBox="0 0 164 135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="greenline"
                  d="M27.4803 20.5854C23.8196 22.2758 18.5605 12.0839 17.5163 10.5289C16.5979 9.13533 15.6417 7.478 13.4402 7.88288C11.0375 8.31658 10.0438 11.4193 9.13817 12.9843C6.92433 16.8897 4.59727 20.7216 2.59729 24.6861C1.64133 26.6171 3.57864 27.2367 4.76105 25.4527C6.6856 22.3961 7.4375 19.2823 9.61632 15.6071C10.9872 13.2946 12.7233 10.0487 13.7548 10.0805C13.9561 10.0516 17.1643 14.5265 17.1643 14.5265C19.2653 17.7244 22.4988 23.0928 27.2162 23.0454C27.8327 23.0469 28.3107 22.799 28.6503 22.3019C28.7258 22.1116 28.9019 21.907 28.9774 21.7168C29.1912 21.0582 28.2476 20.2065 27.4803 20.5854Z"
                  fill="#8AC926"
                />
                <path
                  className="greenline"
                  d="M15.11 19.763C12.9014 43.1453 26.6998 91.545 99.5621 98.085C190.64 106.26 154.197 17.5291 115.032 47.3808C83.7007 71.2621 108.969 106.167 125.52 120.634"
                  stroke="#8AC926"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="linetext">
              <p className="line_texts">512k View </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
