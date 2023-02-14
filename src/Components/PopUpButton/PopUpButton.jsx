import React, { useState } from "react";
import Modal from "../PopUpButton/Modal"
import {motion} from "framer-motion"
import { Tooltip } from "@material-tailwind/react";

const PopUpButton =({handleScroll})=>{
    const [open, setOpen] = useState(false);
    const handleClick = ()=>{
        setOpen(true)
    }

    const itemVariants = {
        open:{
             opacity:1,
             y:0,
             transition:{
                type:"spring",
                duration: 0.2,
             }
        },
        closed:{
            opacity:0,
            y:15,
            transition:{
                duration:0.2
            }
        }
    }

    return(<>
    {open && <Modal open={open} setOpen={setOpen}></Modal>}
         <div>
            <motion.button 
            animate={open?"closed" :"open"}
            whileHiver={{scale:"0.9"}}
            variants={itemVariants}
            className="sm:right-4 sm:bottom-20 rounded-full flex z-20 text-white flex-col fixed right-14 bottom-6  bg-blue-600 px-4 py-4 cursor-pointer hover:bg-blue-200 duration-700 ease-in-out"
             onClick={handleClick}>
               💬
            </motion.button>
            <Tooltip
            content="back to top"
            >
                <div className="sm:block sm:left-4 sm:bottom-20 absolute left-14 hidden rounded-full text-white flex-col bottom-6 z-10 bg-dark px-4 py-2 cursor-pointer "
                >
                <svg xmlns="http://www.w3.org/2000/svg"
                onClick={handleScroll}
                 fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
</svg>
 

                </div>
            </Tooltip>
        </div>
    
    </>)
}

export default PopUpButton