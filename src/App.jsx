import { Route, Routes } from "react-router-dom";
import "./scss/index.css";
import Home from "./components/Home/Home";
import { ThemeContext, themes } from "./components/themeContext/ThemeContext";
import { useState } from "react";
// import img from "./Dark.jpg";
function App() {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="img"
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        {/* <img src={img} /> */}
      </div>
      <div className={`app ${theme === "light" ? "lightApp" : null}`}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
