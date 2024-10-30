import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className= ' cardcontainer  h-[50vh] w-1/2'>
           <div className=' card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center ' >
            <img className='w-32'  src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
           </div>
      </div>
      <div className='cardcontainer w-1/2 flex gap-5  h-[50vh]'>
            <div className=' card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
            <img className='w-32'  src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className=' card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#192826]'>
            <img className='w-32'  src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
      </div>
    </div>
  )
}

export default Card
