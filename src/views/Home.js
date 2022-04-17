import { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";
import useFetch from "../Components/useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error}</div>}

      {isPending && <div className="text-center"> loading ...</div>}

      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
