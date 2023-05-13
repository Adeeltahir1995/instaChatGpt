import React, { useState } from "react";
import "./InputModal.scss";
import { useNavigate } from "react-router-dom";

const InputModal = ({ setInput, input }) => {
  const [prompt, setPrompt] = useState(input);

  const navigate = useNavigate();

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setInput(false);
        }
      }}
      className="inputModal__background"
    >
      <div className="inputModal">
        <section>
          <span>Write an Instagram post caption for</span>
          <input
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            autoFocus={true}
            type="text"
            placeholder="a photo/video of a person meditating in serene setting"
            title="Write a story"
            onKeyDown={(event) => {
              if (event.key === "Enter" && Boolean(prompt)  ) {
                navigate(`/bot/${prompt}`);
                setInput(false);
              }
            }}
          />
        </section>
        <button
          onClick={() => {
            navigate(`/bot/${prompt}`);
            setInput(false);
          }}
          disabled={!Boolean(prompt)}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default InputModal;
