import { useEffect, useRef,useState } from 'react';
import ProjectModel from '../../Components/ProjectModel/ProjectModel';
import style from './project.module.css'
import  './style.css'

const Project = () => {

    const ref= useRef()
    const  [ isIntersecting, setIsIntersection ] = useState(false)

    // useEffect(() => {

    //     const observer = new IntersectionObserver(entries => {
     
    //         entries.forEach(el=> {
    //             el.target.classList.toggle('display', el.target)
    //         })
        
      

    //     } ,{threshold : 1})

    //     Array.from(ref.current.children).forEach(el => {
    //         observer.observe(el)
    //     })

    // }, [ref.current])

    useEffect(() => {

        Array.from(ref.current.children).forEach(el => {
            const observer = new IntersectionObserver(entry => {
                entry.forEach(entries => {
                        entries.target.classList.toggle('display',entries.isIntersecting)
                        console.log(entries.target)
                })
                // if(entry[0].isIntersecting){
                //     entry[0].target.classList.toggle('display')
                // }
                // console.log(entry[0].isIntersecting)
            }, { threshold : 1})
                observer.observe(el)
            })
    },[])


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