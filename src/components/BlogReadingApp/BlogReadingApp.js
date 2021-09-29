import { useState, useEffect } from 'react';
import TitleList from './TitleList';
import BlogBody from './BlogBody';
import BlogPostForm from '../BlogPostForm/BlogPostForm';


function BlogReadingApp() {


    const [blogTitle, setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [blogs, setBlogs] = useState([]);



    useEffect(() => {
        setBlogs([
            {
                id:1,
                blogTitle: 'Jimmy Goes to Publix',
                blogBody: 'Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac.'
            },
            {
                id:2,
                blogTitle: 'Jimmy Goes to Publix',
                blogBody: 'Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac.'
            },
            {
                id:3,
                blogTitle: 'Jimmy Goes to Publix',
                blogBody: 'Sed ullamcorper ullamcorper lacus ut consequat. Sed cursus, nisi vitae vulputate maximus, nibh enim cursus ipsum, non iaculis massa elit sed urna. Pellentesque tincidunt placerat metus sed feugiat. Nunc imperdiet quis sem sagittis aliquet. Curabitur et egestas dui, a ultrices tortor. Integer ac vehicula neque, a molestie mauris. Cras rutrum tristique nibh, at accumsan est dictum ac.'
            },
        ])
    }, []);





    return (
        <main>
            hey!
            <TitleList blogs={blogs} />
            <BlogBody />
        </main>


    )
}
export default BlogReadingApp;