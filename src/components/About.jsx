import React from 'react'

const About = () => {
  return (
    <div className=' w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl  text-black'>
       <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech 
        business that need to rasie funds,sell products,
        explain complex ideas,and hire great people.
         </h1>    
         <div className='w-full   border-t-[1px] pt-20 mt-20 border-[#a1b562]'></div>    
         <div className='w-1/2  '>
            <h1 className='text-7xl '>Our Approach:</h1>
            <button className=' flex gap-5 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className='w-4 h-4 bg-zinc-100 rounded-full'></div>
            </button>
         </div>
         <div  className='w-[40vw] h-[70vh] ml-[48vw]  rounded-3xl   '><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" /></div>
    </div>
    
  )
}

export default About
