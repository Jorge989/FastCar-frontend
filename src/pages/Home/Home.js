import "./Home.css";
import React, { useState, useEffect } from "react";
import CarrsList from "../../components/CarrsList";
// import { useFetch } from "../../hooks/useFetch";
import { projectFirestore } from "../../firebase/config";
export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsPending(true);
    projectFirestore
      .collection("fastcar")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("aqui", snapshot.empty);
          setError("No recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  // const { data, isPending, error } = useFetch("http://localhost:3000/carros");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <CarrsList carros={data} />}
    </div>
  );
}
