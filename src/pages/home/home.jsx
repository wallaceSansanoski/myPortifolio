import { AiOutlineArrowDown } from "react-icons/ai";
import style from './home.module.css'
import { useRef, useEffect,useContext } from "react";
import { ContextScrool } from "../../Context/ContextScrool";

function Home() {

    const { scrool, setScrool } = useContext(ContextScrool)
    const ref = useRef()
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const observe = entries[0]
            setScrool(observe.isIntersecting)
        },
        {
            threshold : 0.1
        })
        observer.observe(ref.current)
    }, [])

    return (
        <div
            ref={ref}
            className={style.wrapper}>
            <h2 className={style.title}>hi there.</h2>
            <div className={style.wrapperTitles}>
                <h1 className={style.mainTitle}>i`m wallac<span className={style.rotetaWord}>e.</span></h1>
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