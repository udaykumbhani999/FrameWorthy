import React from "react";
import "../Moments/Moments.scss";

import { ReactComponent as Account } from "../../Assets/Images/Account.svg";
import { ReactComponent as Location } from "../../Assets/Images/Location.svg";
import { ReactComponent as Heart } from "../../Assets/Images/Heart.svg";
// import { ReactComponent as Lifeflower } from "../../Assets/Images/Lifeflower.svg";

export default function Moments({ lifeimg, lifeflowershape, lifeflower2 }) {
  return (
    <div className="life-leftpart">
      <div className="lifebg">
        <div className={`life_flower ${lifeflower2}`}>{ lifeflowershape}</div>
        <div className="lifecontents">
          <div className="lifeimg">{lifeimg}</div>
          <div className="lifecontent">
            <div className="lifewrapper">
              <div className="content-left">
                <h3 className="headingthree">Lorem Name Unsplash</h3>
                <div className="account-wrapper">
                  <div className="ac-img">
                    <Account />
                  </div>
                  <div className="ac-right">
                    <p className="p-text">Talan Baptista</p>
                    <p className="p-location">
                      <Location /> Location
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-right">
                <button type="buttton" className="vote-btn">
                  <span className="heart-icon">
                    <Heart />
                  </span>
                  <span className="heart-text">Vote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
