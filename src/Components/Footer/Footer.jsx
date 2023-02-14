import React,{useContext} from "react";
import {FooterData1} from "../../DataForPage/dummyData";
import {FooterData2} from "../../DataForPage/dummyData";
import {FooterData3} from "../../DataForPage/dummyData";
import logo from "../../assets/images/logo.svg";
import googlePlay from "../../assets/images/google-play.svg";
import appleStore from "../../assets/images/apple-store.svg";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Footer =()=>{
    const { theme } = useContext(ThemeBgContext);
    const year = new Date().getFullYear();
    return(<div className="pt-10"  >
            <div className="sm:grid-cols-2 grid grid-cols-4 gap-0 items-center  justify-items-center">
                <div className="sm:w-full sm:pl-8 h-64 mx-auto pl-24 ">
                    <div>
                        <img className="h-10 cursor-pointer" src={logo} alt="" />
                    </div>
                    <div className="mt-5"><img className="h-8 cursor-pointer" src={appleStore} alt="appleStore" /></div>
                    <div className="mt-5"><img className="h-8 cursor-pointer" src={googlePlay} alt="googlePlay" /></div>
                </div>
                
                <div className="sm:pr-4 h-64 ">
                    <h3 className={theme==="light"?"text-dark font-inter font-medium text-lg no-underline  align-middle tracking-wide normal-case":
                                                 "text-white font-inter font-medium text-lg no-underline  align-middle tracking-wide normal-case"
                }>Features</h3>
                    {FooterData1.map((item)=>{
                        return<div key={item.id}><p className={theme==="light"?"font-inter text-md font-normal cursor-pointer no-underline  align-middle tracking-wide normal-case text-dark ":
                                                                                "font-inter text-md font-normal cursor-pointer no-underline  align-middle tracking-wide normal-case text-white "
                    }>{item.text}</p></div>
                    })}
                </div>
                <div className="sm:pr-8 h-64 ">
                    <h3 className={theme==="light"?"text-dark font-inter font-medium text-lg no-underline  align-middle tracking-wide normal-case":
                "text-white font-inter font-medium text-lg no-underline  align-middle tracking-wide normal-case"}>Features</h3>
                    {FooterData2.map((item)=>{
                        return<div key={item.id}><p className={theme==="light"?"font-inter text-md font-normal cursor-pointer no-underline  align-middle tracking-wide normal-case text-dark ":
                        "font-inter text-md font-normal cursor-pointer no-underline  align-middle tracking-wide normal-case text-white "
                    }>{item.text}</p></div>
                    })}
                </div>
                <div className="sm:pl-8 h-64 ">
                     <h3 className={theme==="light"?"text-dark font-inter font-medium text-lg no-underline  align-middle tracking-wide normal-case":
                "text-white font-inter font-medium text-lg no-underline  align-middle tracking-wide normal-case"}>Features</h3>
                    {FooterData3.map((item)=>{
                        return<div key={item.id}><p className={theme==="light"?"font-inter text-md font-normal cursor-pointer no-underline  align-middle tracking-wide normal-case text-dark ":
                        "font-inter text-md font-normal cursor-pointer no-underline  align-middle tracking-wide normal-case text-white "
                    }>{item.text}</p></div>
                    })}
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <hr className="sm:w-full h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
            </div>
            <div className="flex justify-around items-center py-6">
                <div>
                    <p className={theme==="light"?"sm:text-xs pb-2 font-medium  cursor-pointer no-underline  align-middle tracking-wide normal-case text-dark ":
                                                    "sm:text-xs pb-2 font-medium  cursor-pointer no-underline  align-middle tracking-wide normal-case text-white "}>AxeL</p>
                </div>
                <div>
                    <p className={theme==="light"?"sm:text-xs pb-2 font-light  cursor-pointer no-underline  align-middle tracking-wide normal-case text-dark":
                                            "sm:text-xs pb-2 font-light  cursor-pointer no-underline  align-middle tracking-wide normal-case text-white"}>Copyright {year} page by Vitalii Babych</p>
                </div>
            </div>
    </div>)
}

export default Footer