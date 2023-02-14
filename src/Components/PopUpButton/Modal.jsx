import React,{useState}from "react";
import {motion} from "framer-motion"
import { Tooltip } from "@material-tailwind/react";

const Modal = ({open, setOpen})=>{

    const [message,setMessage]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(message)
        setMessage("")
        setOpen(false);
    }
    return <div>
        <motion.div className="bg-white fixed right-4 bottom-2 z-20 flex flex-col rounded-2xl"
         initial={{scale:1,opacity:0, height:0, width:0}}
         animate={{
            x:open ? -30 :0,
             y:open ? -30:0, 
            width: open && "300px",
            height: open && "370px",
            opacity:1,
        }}
        transition={{
            type:"spring",
            duration:2,
            ease:"easeInOut",
    }}
        >
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:"Tween",duration:2,}}
            className="pt-4 flex flex-col pl-4">
                <h5 className="cursor-pointer text-4xl text-blue-500 font-inter font-medium tracking-light pt-4">Hello There 🐱‍💻</h5>
                <p className="text-lg text-blue-500 font-inter font-medium tracking-light pt-4">Welcome to our website </p>
                <span className="text-md text-blue-500 font-inter font-medium tracking-light pt-4">Ask us anything</span>
                <div className="pt-8">
                    <form onSubmit={handleSubmit}>
                        <input className="outline-none border-none text-black" placeholder="Send us a message " type="text" name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></input>
                    </form>
                </div>
                <Tooltip content="close"><div className="absolute top-4 right-4 text-black text-xl cursor-pointer z-100" onClick={()=>setOpen(false)}>
                    ×
                </div></Tooltip>
            </motion.div>
        </motion.div>
    </div>
}

export default Modal