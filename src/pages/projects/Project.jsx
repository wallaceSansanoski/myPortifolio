import { useEffect, useRef,useState } from 'react';
import ProjectModel from '../../Components/ProjectModel/ProjectModel';
import style from './project.module.css'
import  './style.css'

const Project = () => {

    const ref= useRef()
    const  [ isIntersecting, setIsIntersection ] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(el => {
            if(el.isIntersecting) {
                el.target.classList.add('display')
            }
            el.target.classList.remove('display')
        })
           
        } ,{threshold : 1})

        observer.observe(Array.from(ref.current.children)[0])
    }, [])

    return (
        <div className={style.wrapper}>
            <div>
                <h1 className={style.title}>projects</h1>
            </div>
            <div
            ref={ref}
             className={style.wrapperProjects}>
                <ProjectModel />
                <ProjectModel />
                <ProjectModel />
                <ProjectModel />
            </div>
        </div>
    )
}

export default Project;