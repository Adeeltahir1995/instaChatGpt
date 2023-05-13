import React, { useState } from "react";
import "./Header.scss";
import InputModal from "./InputModal";
import { useNavigate } from "react-router-dom";

const Header = ({ prompt }) => {
  // const [input, setInput] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* {input && <InputModal input={prompt} setInput={setInput} />} */}
      <header>
        <section onClick={() => navigate("/")}>
          <span></span>
          <h2>Chatbot</h2>
        </section>
        {prompt && (
          <div onClick={() => {}} className="header__prompt">
            {prompt}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
