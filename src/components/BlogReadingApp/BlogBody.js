function BlogBody(props) {


     const blogsHTML = props.blogs.map(blog => (
        <li>
             <p>{blog.blogs}</p> {console.log({ blog: blog.blog })}
        </li>
    ))



    return (
        <div>{blogsHTML}</div>
    )

}

export default BlogBody;