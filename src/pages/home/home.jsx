import { AiOutlineArrowDown } from "react-icons/ai";
import style from './home.module.css'
import { useRef , useEffect, useState} from "react";

function Home () {

    return (
        <div className={style.wrapper}> 
                <h2 className={style.title}>hi there.</h2>
                <div className={style.wrapperTitles}>
                <h1 className={style.mainTitle}>i`m wallace.</h1>
                    <div className={style.wrapperJobTitle}>
                        <div className={style.containerTileJob}>
                             <p className={style.jobTile}>front-end developer junior</p>
                        </div>
                    </div>
                </div>
            <div 
            className={style.wrapperScrollDown}>
                <div
                className={style.scrollDown}>
                    <p>scroll</p>
                    <p>down</p>
                    <span><AiOutlineArrowDown /></span>
                </div>
            </div>
        </div>
    )
}

export default Home;