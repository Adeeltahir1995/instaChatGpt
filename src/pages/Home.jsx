import React, { useState } from "react";
import "./Home.scss";
import Header from "../component/Header";
import TemplateBox from "../component/TemplateBox";
import InputModal from "../component/InputModal";

const Home = () => {
  const [input, setInput] = useState(false);

  return (
    <>
      {input && <InputModal setInput={setInput} />}
      <Header />
      <div className="home__banner">
        <span>Chatbot</span>
      </div>
      <main className="home__main">
        <div className="home__main-title">Templates</div>
        <p>Pick from our curated templates</p>
        <div className="home__main-templates">
          <TemplateBox setInput={setInput} />
        </div>
      </main>
    </>
  );
};

export default Home;
