import style from './about.module.css'
import { ContextScrool } from '../../Context/ContextScrool'
import { useContext, useRef, useEffect } from 'react'


function About () {

    return (
        <div className={style.aboutContainer}>
            <h1 className={style.title}>about</h1>
            <div className={style.containerDescription}>
               <p className={style.introduction}>developer front-end junior with experience using javascript, react, redux, node js, html, css, jest and firebase. Passionate about technology and share new ideas to improve web development.</p>
           </div>
        </div>
    )
}

export default About;