import React, { useState } from "react";
import "./Header.scss";
import InputModal from "./InputModal";

const Header = ({ prompt }) => {
  const [input, setInput] = useState(false);

  return (
    <>
      {input && <InputModal input={prompt} setInput={setInput} />}
      <header>
        <section>
          <span></span>
          <h2>Chatbot</h2>
        </section>
        {prompt && (
          <div onClick={() => setInput(true)} className="header__prompt">
            {prompt}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
