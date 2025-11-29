
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navbar from './Component/Navbar/Navbar'

function App() {

  return (
    <>

      <Navbar></Navbar>


      <div className='w-11/12 mx-auto flex'>

        <div className='w-[70%] border border-black'>
          <Blogs></Blogs>
        </div>

        <div className='w-[30%]  text-center bg-gray-300 text-3xl font-bold'>
          <h3>Reading Time : </h3>
          <h3>BookMark Added : </h3>
        </div>

      </div>

    </>
  )
}

export default App
