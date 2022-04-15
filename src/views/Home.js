import { useState, useEffect } from "react";
import BlogList from "../Components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("Use effect run");
  });

  return (
    <div className="home">
      <h3 className="text-center">Blog List</h3>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
