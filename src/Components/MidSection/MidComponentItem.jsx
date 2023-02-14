import React,{useContext} from "react";
import {room} from "../../DataForPage/dummyData"
import {motion} from "framer-motion"
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";


const MidComponentItem =({title,img,text,reverse})=>{
    const { theme} = useContext(ThemeBgContext);
    return(<div id="company">
        {reverse ? (<div className="sm:grid-cols-1 sm:pt-12 grid grid-cols-2 justify-tems-center items-center ">
            <motion.div className="sm:w-full sm:pl-4 w-4/5 pl-24"
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              transition={{duration:1.5}}
                   variants={{visible:{opacity: 1, scale: 1},hidden: {opacity:0, scale:0 } }} >
                <h2 className={theme==="light"?"sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                                                "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }>{title}</h2>
                <p className={theme==="light"?" sm:text-xl text-2xl w-full  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                                                " sm:text-xl text-2xl w-full  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }>{text}</p>
                <button className="pushable mt-4"><span className="front">Start now</span></button>
            </motion.div>
            <motion.div className=" "
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            transition={{duration:1.5}}
                 variants={{visible:{opacity: 1, scale: 1},hidden: {opacity:0, scale:0 } }}>
                <img className="sm:h-[475px] sm:ml-24  h-[565px] pt-10 hover:rotate-6 duration-1000 cursor-pointer ml-64" src={img} alt="phone1" />
            </motion.div>
        </div>): (<div id="room" className="sm:flex-col sm:text-center flex flex-row-reverse justify-around items-center w-full">
            <div className="sm:w-full sm:pl-4 sm:pb-4 ">
                <h2  className={theme==="light"?"sm:text-3xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                "sm:text-3xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }>{title}</h2>
                
            
            <div className=" flex flex-col ">
            {room.map((item)=>{
                return(<div className="flex flex-cols items-center py-2 " key={item.id}>
                    <div className="mr-4">
                        <img className="w-16 h-16" src={item.img} alt={item.name} />
                    </div>
                    <p className={theme==="light"?"text-xl w-full  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                "text-xl w-full  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                }>{item.name}</p>
                </div>);
            })}
            </div>
            </div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        transition={{duration:1.5}}
             variants={{visible:{opacity: 1, scale: 1},hidden: {opacity:0, scale:0 } }}>
        <img className="sm:h-[475px]  ml-11 h-[565px] pt-4 hover:rotate-6 duration-1000 cursor-pointer " src={img} alt="phone" />
       </motion.div>
       
        </div>
        
        ) }
      
    </div>)
}
export default MidComponentItem