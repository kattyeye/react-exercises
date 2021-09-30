import { useState, useEffect } from "react";
import BookmarkingForm from "./BookmarkingForm";

function BookmarkingApp(){

    const [bookmarks, setBookmarks] = useState([ {
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
            },])

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    const [filter, setFilter] = useState();



    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
     }, [bookmarks]);


function   handleUrlChange(event){
    setUrl(event.target.value);
}
function   handleTitleChange(event){
    setTitle(event.target.value);
}
function   handleTagChange(event){
    setTag(event.target.value);
}

function handleSubmit(event){
    event.preventDefault();
    const newBookmark = {
        url,
        title,
        tag,
    }
    setBookmarks([...bookmarks, newBookmark]);
    setUrl('');
    setTitle('');
    setTag('');
    console.log(bookmarks);

}
function filterTag(event){

   if(event.target.value === 'all'){
    setFilter(null)
   } else {
    setFilter(event.target.value);
   }

}

    const bookmarksHTML = bookmarks
        .filter(bookmark => filter ? bookmark.tag === filter : bookmark)
        .map((bookmark, index) => <li key={index}>{bookmark.title}</li>);

    const tags = bookmarks.map(bookmark => bookmark.tag);
    const uniqueTags = [...new Set(tags)];
    const optionsHTML = uniqueTags.map(tag=><option key={tag} value={tag}>{tag}</option>)

    return (
<>
            <BookmarkingForm bookmarks={ bookmarks}/>
        <select name="" id="" onChange={filterTag}>
            <option value="all">All</option>
            {optionsHTML}
        </select>

            <div>
                {bookmarksHTML}
            </div>
</>
    )
}

export default BookmarkingApp;