import { useState } from 'react';
import './App.css';
import BlogPostForm from './components/BlogPostForm/BlogPostForm'
import ContactForm from './components/ContactForm/ContactForm'
import BlogReadingApp from './components/BlogReadingApp/BlogReadingApp'
import BookmarkingApp from './components/BookmarkingApp/BookmarkingApp'
import BlogAppFull from './components/BlogAppFull/BlogAppFull'

function App() {

  const [selection, setSelection] = useState('blogForm');

  let html;

  if (selection === 'blogForm') {
    html = <BlogPostForm />
  } else if (selection === 'contactForm'){
    html = <ContactForm />
  } else if (selection === 'blogReading') {
    html = <BlogReadingApp />
  } else if (selection === 'bookmarking') {
    html = <BookmarkingApp />
  } else if (selection === 'blogApp') {
    html = <BlogAppFull />
  }




  return (
    <div className="App">
      <header>
        <button type="button" onClick={() => setSelection('blogForm')}>Blog Form</button>
        <button type="button" onClick={() => setSelection('contactForm')}>Contact Form</button>
        <button type="button" onClick={() => setSelection('blogReading')}>Blog Reading App</button>
        <button type="button" onClick={() => setSelection('bookmarking')}>Bookmarking App</button>
        <button type="button" onClick={() => setSelection('blogApp')}> Blog App</button>
      </header>

      {html}


    </div>
  );
}

export default App;
