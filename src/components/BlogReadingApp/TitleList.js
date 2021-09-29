import { useState } from 'react';


function TitleList(props) {

    const [showBlogPost, setShowBlogPost] = useState(false);

    const blogsHTML = props.blogs.map(blog => (
        <article>
            <h3>{blog.blogTitle}</h3>
            <p>{blog.blogBody}</p>
        </article>
    ))






    return (
        <ul>
            {showBlogPost &&
                <div>
                    <button onClick={() => setShowBlogPost(false)} type="button">Show Post</button>
                        {blogsHTML}
                </div>
            }

        </ul>
    )

}

export default TitleList;