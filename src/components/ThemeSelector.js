import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";
import React from "react";
const themeColors = ["#f3123c", "#333", "#150578"];
export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
          alt="Icon"
          onClick={toggleMode}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            ket={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
