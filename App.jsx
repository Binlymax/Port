import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  return (
    <div className="mt-10 mx-auto max-w-6xl grid grid-cols-[40%_60%]">
      <div className='sticky top-10 grid grid-rows-[35%_45%_20%] h-screen'>
        <div className='flex flex-col gap-2'>
          <div className='text-3xl text-cyan-300 font-semibold'>PHOSALATH Phisidxay</div>
          <div className='text-cyan-600 font-semibold'>Find job</div>
          <div className='text-sm w-4/6'>Caption</div>
          <div className='mt-4'>
          <a href='#'>
              <span className='rounded-md bg-cyan-400 py-2 px-4 text-white'>
                View Resume
                <span className='rotate-90 inline-block ml-2 text-sm'><FontAwesomeIcon className='animate-bounce' icon={faArrowDown} /></span>
              </span>
          </a>   
           
          </div>
        </div>
        <div>Nav</div>
        <div className='flex items-end  '>Link</div>
      </div>
      <div>
        <div>About</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>

      </div>
    </div>
  )
}

export default App
