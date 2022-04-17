import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use effect");
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data form that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setisPending(false);
        setError(null);
      })
      .catch((error) => {
        console.log("error", error.message);
        setError(error.message);
        setisPending(false);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
