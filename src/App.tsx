import toast, { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const notify = () => toast('Here is your toast.');

  return (
    <div className='flex justify-center items-center mt-10'>
      <button className='bg-blue-500 rounded-lg p-2' onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  )
}

export default App
