import style from './about.module.css'
import resume from '../../assets/wallaceCv.pdf'
import { FaFileDownload } from "react-icons/fa";

function About () {

    return (
        <div className={style.aboutContainer}>
            <h1 className={style.title}>about</h1>
            <div className={style.containerDescription}>
               <p className={style.introduction}>developer front-end junior with experience using javascript, react, redux, node js, html, css, jest and firebase. Passionate about technology and share new ideas to improve web development.</p>
           </div>
           <div className={style.containerDownload}>
                <FaFileDownload className={style.icon} />
                <button className={style.downloadBtn}><a className={style.link} href={resume} download >download resume</a></button>
           </div>
        </div>
    )
}

export default About;