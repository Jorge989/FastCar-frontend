import { useState, useEffect } from "react";
//export uma constante chamada useFetch uma funcao que recebe
//url, metodod e por padrao ele começa como "GET"
export const useFetch = (url, method = "GET") => {
  //constante data e setData começa com valor nullo
  const [data, setData] = useState(null);
  //constante isPending e setisPending começa como falso
  const [isPending, setIsPending] = useState(false);
  //constante error e isError começa como null
  const [error, setError] = useState(null);
  //constante options e setOptions e igual a null
  const [options, setOptions] = useState(null);
  //entao ele fez uma constante postData que uma função que recebe
  //parametro postData, seu retorno e atribuir ao setOption
  //um objeto contento method: "POST", headers:
  // {"Content-Type": "application/json"},
  //body: JSON.stringify(postData)
  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };
  //entao apos declarar suas constantes nescessarias
  //ele cria um useEffect
  //com a constante controller que recebe o new AbortController()
  useEffect(() => {
    const controller = new AbortController();
    //entao ele segue delcarando constantes como a funcao fetchData
    //e uma funcao asyncrona que recebe um parametro(fetchOptions)
    const fetchData = async (fetchOptions) => {
      setIsPending(true);
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();
        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
    return () => {
      controller.abort();
    };
  }, [url, options, method]);
  return { data, isPending, error, postData };
};
