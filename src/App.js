import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Bot from "./pages/Bot";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot/:prompt" element={<Bot />} />

      </Routes>
    </div>
  );
};

export default App;
