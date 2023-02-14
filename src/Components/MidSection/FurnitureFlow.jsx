import React,{useContext} from "react";
import flowlight from "../../assets/images/flow-light.png"
import flowdark from "../../assets/images/flow-dark.png"
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
const FurnitureFlow =()=>{
    const { theme} = useContext(ThemeBgContext);
    return(<div>
        <img className="sm:hidden bg-center bg-no-repeat bg-cover h-full w-full "  src={theme==="light"?flowlight:flowdark} alt="furniture flow" />
    </div>)
}

export default FurnitureFlow