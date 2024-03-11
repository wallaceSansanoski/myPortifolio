import { AiOutlineArrowUp } from "react-icons/ai";
import style from './scroldownandup.module.css'
import { ContextScrool } from "../../Context/ContextScrool";
import { useContext, useState, useEffect, useRef } from "react";

const ScrolDownAndUp = () => {

    const {scrool } = useContext(ContextScrool)
 
    const ref = useRef()
    const handlleClick = () => {
        scrollTo({
            behavior : "smooth",
            top: 0
        })
    }

    return (
        <div 
            ref={ref}
            onClick={ handlleClick} 
            className={scrool ? '' : style.container }
            >
            <AiOutlineArrowUp/>
            <p>go up</p>
        </div>
    )
}

export default ScrolDownAndUp;