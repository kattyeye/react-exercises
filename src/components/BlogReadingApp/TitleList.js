import { useState } from 'react';


function TitleList(props) {

    // const [showBlogPost, setShowBlogPost] = useState(false);

    const blogTitlesHTML = props.blogs.map(blog => (
        <aside style={{ width:'30%'}}>
            <li >
                <button type="button" onClick={() => props.selectBlog(blog.id)}>{blog.title}</button>
            </li>
        </aside>

    ))

    // console.log({blogsHTML})




    return (
        <ul>
            {blogTitlesHTML}
        </ul>
    )

}

export default TitleList;