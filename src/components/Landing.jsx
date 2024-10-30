import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='w-full h-screen bg-zinc-900 pt-1 pb-10'>
        <div className='textstructure mt-52 px-20'>
            {["We Create", "Eye Opening","Presentations"].map((item,index)=>{
                return <div className='masker '>
                  <div className='w-fit flex item-center'>
                    {index ===1 && (<motion.div 
                    initial={{width:0}}
                    animate={{width:"9vw"}} 
                    transition={{ease:[0.76,0,0.24,1],duration:1}} 
                    className='w-[9vw] h-[6.3vw] relative top-[2vw] bg-red-500'>
                    </motion.div>)}
                <h1  className="flex  .uppercase text-[9vw]   leading-[9vw] tracking-tighter font-['Founders_Grotesk_X-Conde '] font-bold " >
                    {item}
                    </h1>
                    </div>
                    </div>
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between item-center py-2 px-20">
            {["For public and private companies","From the first pitch to IPO"]
            .map((item,index)=><p className='text-md font-light tracking-tight leading-none'>
                {item}
                </p>)}
                <div className='start flex items-center gap-5'>
                       <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md .uppercase  capitalize rounded-full">start the project</div>
                       <div className='w-10 h-10 flex justify-center items-center border-[2px] border-zinc-500 rounded-full'>
                        <span className= "rotate -[45deg]"> 
                        < FaArrowUpLong />     
                        </span>   
                          </div>
                </div>
        </div>
    </div>
  );

}

export default Landing
