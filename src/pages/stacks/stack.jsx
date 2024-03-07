import { RiJavascriptFill } from "react-icons/ri";
import style from './stack.module.css'

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiJest } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";

function Stacks() {

    const stackUsed = [
        {
            name : 'javascript',
            icon : <RiJavascriptFill/>
        },
        {
            name : 'react',
            icon : <FaReact/>
        },
        {
            name : 'redux',
            icon : <SiRedux/>
        },
        {
            name : 'react router ',
            icon : <SiReactrouter/>
        },
        {
            name : 'node js',
            icon : <DiNodejs/>
        },
        {
            name : 'express',
            icon : <SiExpress/>
        },
        {
            name : 'html',
            icon : <FaHtml5/>
        },
        {
            name : 'css',
            icon : <FaCss3Alt/>
        },
        {
            name : 'firebase',
            icon : <IoLogoFirebase/>
        },
        {
            name : 'jest',
            icon : <SiJest/>
        },
    ]

    return (
        <div className={style.wrapper}>
            {stackUsed.map(stack => {
                return (
                    <div key={stack.name} className={style.containerStack}>
                        <p className={style.stackName}>{stack.name}</p>
                        <span className={style.icon}>{stack.icon}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Stacks;