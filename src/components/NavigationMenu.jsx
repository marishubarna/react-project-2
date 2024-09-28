import React from "react";
import "../index.css";
import Logo from "../images/Logo.png";
import MiddlePart from "./MiddlePart";
import ButtomsPart from "./ButtomsPart";
import WhiteElement from "../components/WhiteElement";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>;
const navigation = ["Home", "About", "Gallery", "Menu", "Contact"];

const NavigationMenu = () => {
  return (
    <div>
      <div className="menu-items-display">
        <div className="Logo-display">
          <div className="logo-images">
            <img src={Logo} height={45} alt="" />
          </div>
        </div>

        <ul className="menu-items">
          {navigation.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <MiddlePart />
      <ButtomsPart />
      <WhiteElement />
    </div>
  );
};

export default NavigationMenu;
