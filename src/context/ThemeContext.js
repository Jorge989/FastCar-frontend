import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#f3123c",
    mode: "ligth",
  });

  function changeColor(color) {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  }

  function changeMode(mode) {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
