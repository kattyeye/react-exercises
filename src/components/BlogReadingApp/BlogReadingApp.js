import { useState, useEffect } from "react";
import TitleList from "./TitleList";
import BlogDetail from "./BlogDetail";

function BlogReadingApp() {
  const [selection, setSelection] = useState();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs([
      {
        id: 1,
        title: "Jimmy Goes to Publix 1",
        body: "Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac.",
      },
      {
        id: 2,
        title: "Jimmy Goes to Publix 2",
        body: "Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac.",
      },
      {
        id: 3,
        title: "Jimmy Goes to Publix 3",
        body: "Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac.",
      },
    ]);
  }, []);

  let blog;
  if (selection) {
    blog = blogs.find((blog) => blog.id === selection);
  }

  function selectBlog(id) {
    setSelection(id);
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      <TitleList blogs={blogs} selectBlog={selectBlog} />
      {selection && <BlogDetail blog={blog} />}
    </main>
  );
}
export default BlogReadingApp;
