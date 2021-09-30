function BlogDetail(props) {
    return (
        <div style={{ width: '60%' }}>
            <h2>{props.blog.title}</h2>
            <p>{props.blog.body}</p>
        </div>
    )

}

export default BlogDetail;