import React from "react";
import Text1 from "./text1/Text1";
import Text2 from "./text2/Text2";
import "./Texts.css";

const Texts = () => {
  return (
    <div className="whole-texts-container">
      <div className="text1-container">
        <div className="text1-text">
          <Text1 />
        </div>
        <div className="text1-img">
          <img src="security1.png" alt="shield icon" />
        </div>
      </div>
      <div className="text2-container">
        <div className="text2-img">
          <img src="security2.png" alt="locking folder icon" />
        </div>
        <div className="text2-text">
          <Text2 />
        </div>
      </div>
    </div>
  );
};

export default Texts;
