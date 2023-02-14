import React,{useContext} from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { tabsData } from "../../DataForPage/dummyData";
  import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const TabsComponent =()=>{

  const { theme} = useContext(ThemeBgContext);
    return<div id="features">
        <Tabs id="custom-animation" value="bedroom" className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center  content-beetwen w-full">
        <div className="sm:w-full sm:pl-4 w-4/5 pl-11">
            <h1 className={theme==="light"?"sm:text-center sm:text-3xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                                            "sm:text-3xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
          }>
                Features</h1>
            <p className={theme==="light"?"sm:text-xl pt-5 text-2xl w-full  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                                          "sm:text-xl pt-5 text-2xl w-full  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
          }>
            AxeL offers many great  features. You can create own room, request a service, buy modern  looking furniture, sell a furniture and so much more. Take  a snek peek at each of them.
            </p>
       
      <TabsHeader className="sm:flex-col flex justify-center items-center content-center bg-gray-100">
        {tabsData.map(({label, value})=>(
            <Tab className="" key={value} value={value}>
                <p className="text-royalBlue font-inter leading-normal align-middle tracking-normal normal-case">{label}</p>
            </Tab>
        ))}
       
          
      </TabsHeader>
      <TabsBody
        animate={{
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >     {tabsData.map(({value, desc, linkText})=>(
             <TabPanel key={value} value={value}>
                <p className={theme==="light"?"text-lg relative w-full  font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark":
                                                "text-lg relative w-full  font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }>
                    {desc}
                </p>
                <span className="text-royalBlue font-inter leading-normal align-middle tracking-normal normal-case relative right-3 cursor-pointer hover:animate-puls ">{linkText}</span>
             </TabPanel>
      ))}
         

      </TabsBody>
      </div>
      <div>
        <TabsBody
        animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}>
            {tabsData.map(({value, img})=>(
            <TabPanel key={value} value={value}>
                 <img className="sm:h-[475px] sm:pl-0 pl-12 h-[565px]" src={img} alt="phone" />
            </TabPanel>))}
        </TabsBody>
    </div>
    </Tabs>
   
    </div>
}

export default TabsComponent