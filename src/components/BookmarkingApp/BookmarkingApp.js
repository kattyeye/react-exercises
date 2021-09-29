function BookmarkingApp(props) {



    return (
        <div>
            <nav>
                <ul>
                    <li><button type="button">Tag</button></li> {/* should filter by tag, 3 of these? */}
                    <li><button type="button">Tag</button></li> {/* should filter by tag, 3 of these? */}
                    <li><button type="button">Tag</button></li> {/* should filter by tag, 3 of these? */}

                </ul>
            </nav>

        <form>
            <h2><label>Bookmarking Form</label></h2>
            <input type="url"></input>
            <input type="text"></input>
            <input type="text"></input>
        </form>
        </div>


    )
}

export default BookmarkingApp;