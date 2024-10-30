import { motion, useAnimation } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useState } from 'react'

const Featured = () => {
  const cards =[useAnimation(),useAnimation()]
  const handleHover =(index)=>{
    cards[index].start({y:"0%"})
  }
  const handleHoverEnd =(index)=>{
    cards[index].start({y:"100%"})
  }
  return (
   
    
    <div className='w-full  py-20 '>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
                Featured Projects
            </h1>
                 </div>
              <div className='px-20'>                    
            <div className='cards w-full mt-20 flex gap-10'>

                <motion.div
                 onHoverStart={()=>handleHover(0)}
                 onHoverEnd={()=>handleHoverEnd(0)}
                 className='cardcontainer  relative  w-1/2 h-[75vh]  '>
                <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] -pb-10 leading-none tracking-tighter  text-[#CDEA68] text-8xl'>
                
                {"TRAWA".split('').map((item,index)=>
                <motion.span initial={{y:"100%"}}
                 animate={cards[0]} 
                 transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}
                 className='inline-block'
                 
                 >
                  {item}
                  </motion.span>)}
                </h1>
                 
                  <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                    <img className='w-full h-full bg-cover'
                     src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg'/>
                  </div>
                  </motion.div>
                <motion.div 
                 onHoverStart={()=>handleHover(1)}
                 onHoverEnd={()=>handleHoverEnd(1)}
                className='cardcontainer  relative  w-1/2 h-[75vh]  '>
                <h1 className='absolute flex overflow-hidden  right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] -pb-10 leading-none tracking-tighter  text-[#CDEA68] text-8xl'>
                {"AH2 & MATT HORN".split('').map((item,index)=>
                <motion.span 
                initial={{y:"100%"}}
                 animate={cards[1]} 
                 transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}
                 className='inline-block'
                  >{item}
                  </motion.span>)}
               </h1>
                  <div className='card w-full h-full rounded-xl bg-green-600 overflow-hidden'>
                    <img className='w-full h-full bg-cover'
                     src='https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png'/>
                  </div>
                  
                </motion.div>
                  </div>
          </div>
    </div>
  )
}

export default Featured
