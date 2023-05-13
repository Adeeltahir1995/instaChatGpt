import React, { useEffect, useRef, useState } from "react";
import "./Bot.scss";
import Header from "../component/Header";
import Sparkle from "../assets/images/sparkle.gif";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import AIWriter from "react-aiwriter";

const Bot = () => {
  const { prompt } = useParams();

  const [chat, setChat] = useState("");
  const [allChats, setAllChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatInput = useRef();
  const chatbox = useRef(null);

  const handleChat = async () => {
    allChats.push({
      role: "user",
      content: "Write an Instagram post caption for " + prompt,
    });
    setAllChats([...allChats]);
    setLoading(true);

    const res = await axios.post(
      "https://6cm2u28vyi.execute-api.us-east-1.amazonaws.com/dev/accio-chat",
      {
        message: [
          {
            role: "user",
            content: "Write a brief Instagram post caption for " + prompt,
          },
        ],
      }
    );

    setAllChats([...allChats, res.data.response]);
    setLoading(false);
  };

  const handlePrompt = async () => {
    allChats.push({
      role: "user",
      content: `${chat}`,
    });
    setAllChats([...allChats]);
    setLoading(true);
    const res = await axios.post(
      "https://6cm2u28vyi.execute-api.us-east-1.amazonaws.com/dev/accio-chat",
      {
        message: [...allChats.slice(Math.max(allChats.length - 4, 1))],
      }
    );

    setAllChats([...allChats, res.data.response]);
    setChat("");
    setLoading(false);
  };

  useEffect(() => {
    handleChat();
  }, []);

  const scrollToBottom = () => {
    chatbox.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [allChats]);

  return (
    <div className="bot">
      <Header prompt={prompt} />
      <div className="bot__prompt">
        {" "}
        {allChats.map((chat) => {
          if (chat.role === "user") {
            return (
              <div className="bot__prompt-question">
                <section>
                  <span></span>
                  <div className="bot__prompt-question-text">
                    {parse(chat.content, {
                      trim: true,
                    })}
                  </div>
                </section>
              </div>
            );
          } else {
            return (
              <div className="bot__prompt-answer">
                <section>
                  <img src={Sparkle} alt="sparkle" />

                  <div className="bot__prompt-answer-text">
                    <AIWriter key={Math.random}>
                      {parse(chat.content, {
                        trim: true,
                      })}
                    </AIWriter>
                  </div>
                </section>
              </div>
            );
          }
        })}
        <div ref={chatbox}></div>
      </div>
      <div className="chat__container">
        <div className="chat">
          <div className="chat__button">
            <button
              onClick={() => {
                setChat("Make the caption longer.");

                chatInput.current.focus();
              }}
            >
              Make longer
            </button>
            <button
              onClick={() => {
                setChat("Change tone to ");

                chatInput.current.focus();
              }}
            >
              Change tone
            </button>
            <button
              onClick={() => {
                setChat("Summarise the caption.");

                chatInput.current.focus();
              }}
            >
              Summarise
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
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (!loading) {
                    handlePrompt();
                  }
                }
              }}
            />
            {loading && (
              <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Bot;
