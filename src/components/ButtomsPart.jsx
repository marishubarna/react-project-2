import React from "react";
import ImagesAroundText from "../images/Shape.png";
import buttonStyle from "./buttom.module.css";
const ButtomsPart = () => {
  return (
    <div className="buttonDisplayLeft">
      <div className={buttonStyle.ButtonDisplay}>
        <button className={buttonStyle.button1} singUp type="submit">
          <a className={buttonStyle.linkButton1} href="">
            Sing Up
          </a>
        </button>
        <button
          className={` ${buttonStyle.button2} ${buttonStyle.play}`}
          type="submit"
        >
          <img src={buttonStyle.ImagesAroundText} height={26} alt="" />
          <a className={buttonStyle.linkButton2} href="">
            Play
          </a>
        </button>
      </div>
    </div>
  );
};

export default ButtomsPart;
