import { useState, useEffect } from 'react';
{/* Create a bookmarking app where you can save URLs to localStorage. It should
  have a form where you enter the URL, a title, and a "tag". There should be a list
  of all the URLs, as well as a list of all the tags (this should be generated
  dynamically). When you click on a tag, the link list should show only those tags.
  Hint: which tag is selected is "application state".*/}


function BookmarkingForm(props) {



    const [bookmarks, setBookmarks] = useState([]);
    // const [counter, setCounter] = useState(1);
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (localStorage.getItem('bookmarks')) {
            setBookmarks(JSON.parse(localStorage.getItem('bookmarks')));
        }
    }, []);

    useEffect(() => {
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }, [bookmarks]);

    function handleSubmit(e) {
        e.preventDefault();

        const bookmark = {
            title,
            tag,
            url,
        }
console.log({bookmarks})

        setBookmarks([...bookmarks, bookmark]);

            setTitle('')
            setTag('')
            setUrl('')
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
            <input value={url} onChange={handleUrlChange} type="url" name="url-input" id="new-image-url" placeholder=' URL' />
            <input value={title} onChange={handleTitleChange} type="text" name="caption-input" id="new-image-caption" placeholder='Title' />
            <input value={tag} onChange={handleTagChange} type="text" name="caption-input" id="new-image-caption" placeholder='Tag' />
            <button type="submit">Submit</button>
        </form>
    )
}

// function BookmarkingApp() {






//     return (
//         <div>
//             <nav>
//                 <ul>
//                     <li><button type="button">Tag</button></li> {/* should filter by tag, 3 of these? */}
//                     <li><button type="button">Tag</button></li> {/* should filter by tag, 3 of these? */}
//                     <li><button type="button">Tag</button></li> {/* should filter by tag, 3 of these? */}

//                 </ul>
//             </nav>

//         <form>
//             <h2><label>Bookmarking Form</label></h2>
//             <input type="url"></input>
//             <input type="text"></input>
//             <input type="text"></input>
//         </form>
//         </div>


//     )
// }

export default BookmarkingForm;