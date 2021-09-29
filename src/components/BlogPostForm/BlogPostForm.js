import { useState, useEffect } from "react";

function BlogPostForm(props) {

    const [blogPosts, setBlogPosts] = useState([]);
    // const [counter, setCounter] = useState(1);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    useEffect(() => {
        if (localStorage.getItem('blogPosts')) {
            setBlogPosts(JSON.parse(localStorage.getItem('blogPosts')));
        }
    }, []);

    useEffect(() => {
       localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }, [blogPosts]);

    function handleSubmit(e) {
        e.preventDefault();

        const blogPost = {
            title,
            body,
            // id: counter,
        }
        // console.log([...blogPosts])

        setBlogPosts([...blogPosts, blogPost]);
        // setCounter(counter + 1);

        setTitle('')
        setBody('')
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleBodyChange(e) {
        setBody(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>BlogPostForm</h2>
            <input value={title} onChange={ handleTitleChange} name="title-input" id="new-title-input" type="text" placeholder="Title goes here"/>
            <input value={ body } onChange={ handleBodyChange} name="body-input" id="new-body-input" type="text" placeholder="Text goes here" />
            <button type="submit">Submit</button>
        </form>

    )

}

export default BlogPostForm;