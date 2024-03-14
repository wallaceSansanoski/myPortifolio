import { AiOutlineArrowDown } from "react-icons/ai";
import style from './home.module.css'
import { useRef, useEffect,useContext } from "react";
import { ContextScrool } from "../../Context/ContextScrool";
import resume from '../../assets/wallaceCv.pdf'

function Home() {

    const { setScrool } = useContext(ContextScrool)
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const observe = entries[0]
            setScrool(observe.isIntersecting)
        })
        observer.observe(ref.current)
    }, [])


    return (
        <div
            ref={ref}
            className={style.wrapper}>
            <h2 className={style.title}>hi there.</h2>
            <div className={style.wrapperTitles}>
                    <h1 className={style.mainTitle}>i`m wallac<span className={style.rotetaWord}>e</span></h1>
                <div className={style.wrapperJobTitle}>
                        <p className={style.jobTile}>front-end developer junior</p>
                </div>
            </div>

            <div
                className={style.wrapperScrollDown}>
                    <button><a href={resume} download >download resume</a></button>
                    <img src={'../../assets/resumeWallace.pdf'}></img>
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