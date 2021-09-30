import { useState, useEffect } from 'react';
{/* Create a bookmarking app where you can save URLs to localStorage. It should
  have a form where you enter the URL, a title, and a "tag". There should be a list
  of all the URLs, as well as a list of all the tags (this should be generated
  dynamically). When you click on a tag, the link list should show only those tags.
  Hint: which tag is selected is "application state".*/}

function BookmarkingForm(props) {

    // const [counter, setCounter] = useState(1);
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [url, setUrl] = useState('');
    const [bookmarks, setBookmarks] =
        useState([
            {
                url: 1,
                title: 'Jimmy Goes to Publix 2',
                tag: '2'
            },
            {
                url: 2,
                title: 'Jimmy Goes to Publix 2',
                tag: '2'
            },
            {
                url: 3,
                title: 'Jimmy Goes to Publix 3',
                tag: '3'
            },
        ]);

    function handleSubmit(e) {
        e.preventDefault();

        const bookmark = {
            title,
            tag,
            url,
        }
            console.log({bookmarks})
            setBookmarks([...bookmarks, bookmark]);
            setUrl('');
            setTitle('');
            setTag('');
            console.log(bookmarks);
    }


    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleTagChange(e) {
        setTag(e.target.value);
    }

    function handleUrlChange(e) {
        setUrl(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit} >
            <label>Bookmark Form</label>
            <input value={url} onChange={handleUrlChange} type="url" name="url-input" id="new-url" placeholder=' URL' />
            <input value={title} onChange={handleTitleChange} type="text" name="caption-input" id="new-title" placeholder='Title' />
            <input value={tag} onChange={handleTagChange} type="text" name="caption-input" id="new-tag" placeholder='Tag' />
            <button type="submit">Submit</button>
        </form>
    )
}


export default BookmarkingForm;