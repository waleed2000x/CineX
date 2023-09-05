import { Route, Routes } from "react-router-dom";
import "./scss/index.css";
import Home from "./components/Home/Home";
import { ThemeContext, themes } from "./components/themeContext/ThemeContext";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
