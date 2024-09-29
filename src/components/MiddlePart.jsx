import React from "react";
import Images2 from "../images/Images2.png";
const MiddlePart = () => {
  return (
    <div>
      <div className="tetx-images-display-middle-part">
        <div className="Text-middle-part">
          <h1 className="Header-middle-part">
            Let's step into a new dimension
          </h1>
          <p className="Paragraf-middle-part">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            commodi aliquid, aspernatur sit aliquam aut saepe? Fuga reiciendis
            sapiente, natus quos provident aliquam. Doloremque, officia ipsum.
          </p>
        </div>
        <div className="Images-middle-part">
          <img src={Images2} height={785} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
