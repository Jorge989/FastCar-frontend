import React from "react";
import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { color } = useTheme();

  console.log(color);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>FastCar</h1>
        </Link>
        <Link to="/create">Anunciar carro</Link>
      </nav>
    </div>
  );
}
