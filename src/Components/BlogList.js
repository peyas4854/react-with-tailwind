const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h4>{blog.title} </h4>
          <p> {blog.author}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
