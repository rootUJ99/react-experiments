import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      try {
        console.log(options);
        const res = await fetch(url, options);
        const data = await res.json();
        if (data) {
          setData(data);
        }
      } catch (e) {
        console.log(e);
        setData(e);
      }
    })();
  }, [url]);
  return [data];
};

export default useFetch;
