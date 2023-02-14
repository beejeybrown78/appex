import React from "react";
import MidComponentItem from "./MidComponentItem";
import  MidPhone1 from "../../assets/images/MidComponentPhone.png"
import  MidPhone2 from "../../assets/images/midPhone2.png"

const MidParent =()=>{
    return(<div>
      <MidComponentItem title="Dive into the Future" text="In a world where people constantly have phone in their fands, the need for  online opportunities is growing. We have  a solution- fully digital acces to all infomation and services related to the interior and design itself.Everything for a carefree stay in  the palm of a hand."
      img={MidPhone1}
      reverse></MidComponentItem>
      <MidComponentItem title="Search by room" 
      img={MidPhone2}></MidComponentItem>
    </div>)
}
export default MidParent