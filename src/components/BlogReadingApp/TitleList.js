import { useState } from "react";

function TitleList(props) {
  // const [showBlogPost, setShowBlogPost] = useState(false);

  const blogTitlesHTML = props.blogs.map((blog) => (
    <aside style={{ width: "30%" }}>
      <div class="btn-group-vertical" style={{ padding: "10px" }}>
        <button
          class="btn btn-info btn-large"
          type="button"
          onClick={() => props.selectBlog(blog.id)}
        >
          {blog.title}
        </button>
      </div>
    </aside>
  ));

  // console.log({blogsHTML})

  return <ul>{blogTitlesHTML}</ul>;
}

export default TitleList;
