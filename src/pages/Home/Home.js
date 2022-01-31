import React from "react";
import CarrsList from "../../components/CarrsList";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/carros");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <CarrsList carros={data} />}
    </div>
  );
}
