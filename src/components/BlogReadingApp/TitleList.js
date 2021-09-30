import { useState } from 'react';


function TitleList(props) {

    const [showBlogPost, setShowBlogPost] = useState(false);

    const blogTitlesHTML = props.blogs.map(blog => (
        <li>
            <button>{blog.blogTitle}</button>
        </li>
    ))

    // console.log({blogsHTML})




    return (
        <ul>
            <button type="button" onClick={() => {setShowBlogPost(false)}}>{blogTitlesHTML}</button>
        </ul>
    )

}

export default TitleList;