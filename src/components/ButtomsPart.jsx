import React from "react";
import ImagesAroundText from "../images/Shape.png";
const ButtomsPart = () => {
  return (
    <div className="button-display-left">
      <div className="Button-display">
        <button className="button-1 sing-up" type="submit">
          <a className="link-button-1" href="">
            Sing Up
          </a>
        </button>
        <button className="button-2 play" type="submit">
          <img src={ImagesAroundText} height={26} alt="" />
          <a className="link-button-2" href="">
            Play
          </a>
        </button>
      </div>
    </div>
  );
};

export default ButtomsPart;
