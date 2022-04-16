import { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("use effect");
    fetch("http://localhost:8000/blogs12")
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
  }, []);

  return (
    <div className="home">
      {error && <div> {error}</div>}

      {isPending && <div className="text-center"> loading ...</div>}

      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
