import React,{useState} from "react";
import Button from "../component/Button";
import Popup from "../component/Popup";
const Showpop = ()=>{
    const [showPop, setShowPop] = useState(false);
    const openPop = ()=>{
        setShowPop(true)
    }
    const closePop=()=>{
        setShowPop(false)
    }
    return(
        <>
            <Button onClick={openPop} children={'Show Popup'} />
            {showPop && <><Popup onClose={closePop}/></>}
        </>
    )
}

export default Showpop;