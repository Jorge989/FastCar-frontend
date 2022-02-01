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
      //aqui troca setIspending para true
      setIsPending(true);
      //try
      try {
        //constante resposta recebe  await fetch com await (url) recebe url de parametro
        //e tudo ...com spread que tem no parametro fetchOptions
        //e tbm um valor chamado signal: que recebe controller.signal
        //em seguinda se ! for o contratrio de res.ok
        // throw new Error (res.statusText)
        //saindo do if constante data  recebe res.json();
        //em seguida passa setIsPending para false
        //setDate passando o data que é a resposta da chamada http
        //e o setError null
        //caso de erro cai no catch (err)
        //se err.name === "AbortError" console.log("th Fetch was aborted")
        //senao setIsPending(false) setError("Could not fetch the data")
        //sai dos ifs dos catchs dos elses
        //outro if se paramtro method for ==="GET"
        //fetchData() //se (method ==="POST" && options)
        //fetchData(options)
        //return ()=> controller abort() ou seja dps de executar tudo isso ele
        //aborta o controller
        //dependencias do useEffect url,options,method
        //retorna { data, isPending, error, postData }
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
