import { createContext, useState } from "react";

export const ContextClick = createContext({
 isClicked: false,
 closeBg: ()=>{}
})




export function ContextClickValue({children}){

    const [isClicked, setIsClicked] = useState(false)

   function closeBg(value){
    console.log("WE ARE INSIDE CONTEXT",value)
    setIsClicked((prevValue)=> !prevValue)
   }
return(
<ContextClick.Provider value = {{isClicked,closeBg}}>
    {children}
</ContextClick.Provider>
)}


