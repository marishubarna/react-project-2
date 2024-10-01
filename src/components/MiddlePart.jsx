import React from "react";
import Images2 from "../images/Images2.png";
import middle from "../components/middlePart.module.css";
const MiddlePart = () => {
  return (
    <div>
      <div className={middle.tetxImagesDisplayMiddlePart}>
        <div className={middle.TextMiddlePart}>
          <h1 className={middle.HeaderMiddlePart}>
            Let's step into a new dimension
          </h1>
          <p className={middle.ParagrafMiddlePart}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            commodi aliquid, aspernatur sit aliquam aut saepe? Fuga reiciendis
            sapiente, natus quos provident aliquam. Doloremque, officia ipsum.
          </p>
        </div>
        <div className={middle.ImagesMiddlePart}>
          <img src={Images2} height={785} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
