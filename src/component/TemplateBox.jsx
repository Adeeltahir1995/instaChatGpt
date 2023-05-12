import React from "react";
import "./TemplateBox.scss";

const TemplateBox = ({ setInput }) => {
  return (
    <div className="templateBox" onClick={() => setInput(true)}>
      <div className="templateBox__background">
        <span>
          Instagram <br /> Caption
        </span>
      </div>
      <div className="templateBox__detail">
        <div className="templateBox__detail-title">Instagram Caption</div>
        <div className="templateBox__detail-para">
          Create a catchy caption for your Instagram post
        </div>
      </div>
    </div>
  );
};

export default TemplateBox;
