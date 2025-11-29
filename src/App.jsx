
import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navbar from './Component/Navbar/Navbar'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleBookMark = (blog) => {
    setBookmark([...bookmark, blog]);
  }




  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsReadBtn = (time, id) => {
    setReadingTime(readingTime + time);

    handleRemoveBookmark(id);
  }
  const handleRemoveBookmark = (id) => {
    const remaining = bookmark.filter(mark => mark.id !== id);
    setBookmark(remaining);
  }




  return (
    <>

      <Navbar></Navbar>


      <div className='w-11/12 mx-auto flex my-16'>

        <div className='w-[70%] '>
          <Blogs handleBookMark={handleBookMark} handleMarkAsReadBtn={handleMarkAsReadBtn}></Blogs>
        </div>

        <div className='w-[30%]  text-center bg-gray-300 text-3xl font-bold'>
          <h3>Reading Time : {readingTime}</h3>
          <h3>BookMark Added : {bookmark.length}</h3>

          {
            bookmark.map((mark) => <h3 key={mark.title} className='border-3 border-red-500 mt-5 p-7 bg-sky-300'>{mark.title}</h3>)
          }

        </div>

      </div>

    </>
  )
}

export default App
