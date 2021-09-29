import { useState, useEffect } from 'react';


function BlogReadingApp() {


    const [showBlogPost, setShowBlogPost] = useState(false);
    const [showBlogPost2, setShowBlogPost2] = useState(false);
    const [showBlogPost3, setShowBlogPost3] = useState(false);







    return (
        <main>


            <aside style={{
                display: 'flex', width: '25%',
            flexDirection:'column'}}>
                    {showBlogPost &&
                        <div> <button onClick={() => { setShowBlogPost(false) }}>Title of Blog</button>
                            <p>Etiam scelerisque diam ac enim gravida, et dapibus massa consequat. Integer interdum diam non ante fringilla rhoncus. Vivamus dictum lacus porttitor leo pellentesque, quis accumsan velit sagittis. Phasellus a convallis ante, nec rhoncus mi. Suspendisse potenti. Proin vulputate eget metus a tristique. Integer vehicula aliquam tempor. Donec vulputate risus ac sem vestibulum, a convallis augue rutrum. Donec interdum a orci eu ultrices.</p>
                        </div>

                    }
                    {!showBlogPost &&
                        <button onClick={() => { setShowBlogPost(true) }}>Title of Blog</button>
                    }

                {showBlogPost2 &&
                     <div> <button onClick={() => { setShowBlogPost2(false) }}>Title of Blog</button>
                            <p>Etiam scelerisque diam ac enim gravida, et dapibus massa consequat. Integer interdum diam non ante fringilla rhoncus. Vivamus dictum lacus porttitor leo pellentesque, quis accumsan velit sagittis. Phasellus a convallis ante, nec rhoncus mi. Suspendisse potenti. Proin vulputate eget metus a tristique. Integer vehicula aliquam tempor. Donec vulputate risus ac sem vestibulum, a convallis augue rutrum. Donec interdum a orci eu ultrices.</p>
                        </div>
                }
                {!showBlogPost2 &&
                        <button onClick={() => { setShowBlogPost2(true) }}>Title of Blog</button>
                }

                {showBlogPost3 &&
                     <div> <button onClick={() => { setShowBlogPost3(false) }}>Title of Blog</button>
                            <p>Etiam scelerisque diam ac enim gravida, et dapibus massa consequat. Integer interdum diam non ante fringilla rhoncus. Vivamus dictum lacus porttitor leo pellentesque, quis accumsan velit sagittis. Phasellus a convallis ante, nec rhoncus mi. Suspendisse potenti. Proin vulputate eget metus a tristique. Integer vehicula aliquam tempor. Donec vulputate risus ac sem vestibulum, a convallis augue rutrum. Donec interdum a orci eu ultrices.</p>
                        </div>
                }
                {!showBlogPost3 &&
                        <button onClick={() => { setShowBlogPost3(true) }}>Title of Blog</button>
                }

                 </aside>

        </main>


    )
}
export default BlogReadingApp;