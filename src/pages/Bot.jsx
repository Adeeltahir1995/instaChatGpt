import React, { useRef, useState } from "react";
import "./Bot.scss";
import Header from "../component/Header";
import Sparkle from "../assets/images/sparkle.gif";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Bot = () => {
  const { prompt } = useParams();
  const [chat, setChat] = useState("");

  const chatInput = useRef();

  console.log(prompt);
  return (
    <div className="bot">
      <Header prompt={prompt} />
      <div className="bot__prompt">
        <div className="bot__prompt-question">
          <section>
            <span></span>
            <div className="bot__prompt-question-text">
              A person sitting on the mountain meditating
            </div>
          </section>
        </div>
      </div>

      <div className="chat">
        <div className="chat__button">
          <button
            onClick={() => {
              setChat("");
            }}
          >
            Make longer
          </button>
          <button
            onClick={() => {
              setChat("Change tone ");

              chatInput.current.focus();
            }}
          >
            Change tone
          </button>
        </div>
        <section className="chat__box">
          <img src={Sparkle} alt="sparkle" />
          <input
            type="text"
            placeholder="Ask Chatbot"
            ref={chatInput}
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
        </section>
      </div>
    </div>
  );
};

export default Bot;
