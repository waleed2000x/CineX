import { Route, Routes } from "react-router-dom";
import "./scss/index.css";
import Home from "./components/Home/Home";
import { ThemeContext, themes } from "./components/themeContext/ThemeContext";
import { useState } from "react";
import Popular from "./components/Popular/Popular";
import Profile from "./components/profile/Profile";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme === "light" ? "lightApp" : null}`}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/popular" element={<Popular />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
