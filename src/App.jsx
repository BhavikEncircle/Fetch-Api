import { useState } from 'react'
import './App.css'
import FetchdcedData from './Pages/DataFetch/FetchedData'
function App() {
  const [fetchData, setFetchData] = useState(false)

  return (
    <>
      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-3xl font-bold'>Fetch API</h1>
        <button
          onClick={() => setFetchData(true)}
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
        >
          Fetch Data
        </button>

        <FetchedData fetchData={fetchData} />
      </div>
    </>
  )
}

export default App
