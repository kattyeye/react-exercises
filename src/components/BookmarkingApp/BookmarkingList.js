{ /*
    function BookmarkingList() {

        const [filter, setFilter] = useState();

        const tags = bookmarks.map(bookmark => bookmark.tag);
        const uniqueTags = [...new Set(tags)];
        const optionsHTML = uniqueTags.map(tag => <option key={tag} value={tag}>{tag}</option>)

        function filterTag(event) {

            if (event.target.value === 'all') {
                setFilter(null)
            } else {
                setFilter(event.target.value);
            }

        }

        const bookmarksHTML = bookmarks
            .filter(bookmark => filter ? bookmark.tag === filter : bookmark)
            .map((bookmark, index) => <li key={index}>{bookmark.title}</li>);

        return (
            <div>
                <select name="" id="" onChange={filterTag}>
                    <option value="all">All</option>
                    {optionsHTML}
                </select>
                {bookmarksHTML}
            </div>
        )
    }

    export default BookmarkingList;
*/}