import { AiOutlineArrowUp } from "react-icons/ai";
import style from './scroldownandup.module.css'
import { ContextScrool } from "../../Context/ContextScrool";
import { useContext } from "react";

const ScrolDownAndUp = () => {

    const {scrool} = useContext(ContextScrool)
    const classValue = scrool ? null : 'style.fadedButton'  

    const handlleClick = () => {
        scrollTo({
            behavior : "smooth",
            top: 0
        })
    }
    return (
        <div 
            onClick={ handlleClick} 
            className={`${scrool ? `${style.fadedButtonReverse} ${style.container}`: `${style.container} ${style.fadedButton}`}`}>
            <p>go up</p>
            <AiOutlineArrowUp/>
        </div>
    )
}

export default ScrolDownAndUp;