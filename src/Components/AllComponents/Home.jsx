import React,{useContext, useRef} from "react";
import Navbar from "../NavBar/Navbar";
import Header from "./Header/Header";
import WrapperContainer from "../WrapperContainer/WrapperContainer";
import MidFilterSection from "../MidSection/MidFilterSection";
import MidParent from "../MidSection/MidParent";
import TabsComponent from "../MidSection/TabsComponent";
import FurnitureFlow from "../MidSection/FurnitureFlow";
import NewsLetter from "../MidSection/NewsLetter";
import Cards from "../MidSection/Cards";
import Footer from "../Footer/Footer"
import PopUpButton from "../PopUpButton/PopUpButton"
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import MobileNav from "../NavBar/MobileNav"
const Home =()=>{
    const { theme } = useContext(ThemeBgContext);

    const sectionTop = useRef();
    const handleScroll = ()=>{
        sectionTop.current?.scrollIntoView({behavior:"smooth"})
    }
  return(


    <div className="relative ">

        <MobileNav></MobileNav>
        <div>

            <PopUpButton handleScroll={handleScroll}>
                
            </PopUpButton>
        </div>
        <div className={theme==="light"?"bg-white":"bg-dark"}>
        <WrapperContainer navHead>
        <Navbar></Navbar>
        <Header topRef={sectionTop}></Header>
        </WrapperContainer>
        </div>
        <div className={theme==="light"?"bg-gray-100 w-full":"bg-dark w-full"}>
            <WrapperContainer>
                <MidFilterSection></MidFilterSection>
                <MidParent></MidParent>
                <TabsComponent></TabsComponent>
                <FurnitureFlow></FurnitureFlow>
                <Cards></Cards>
                <NewsLetter></NewsLetter>
            </WrapperContainer>
            <div className="mt-40">
                <Footer></Footer>
            </div>
        </div>
    </div>)
}

export default Home