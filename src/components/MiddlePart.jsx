import React from "react";
import Images2 from "../images/Images2.png";
import "../index.css";
const MiddlePart = () => {
  return (
    <div>
      <div className="tetx-images-display-middle-part">
        <div className="Text-middle-part">
          <h1 className="Header-middle-part">
            Let's step into a new dimension
          </h1>
        </div>
        <div className="Images-middle-part">
          <img src={Images2} height={605} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
