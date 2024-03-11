import style from './projectModel.module.css'
import { useRef, useEffect } from 'react';

const ProjectModel = () => {

    const ref = useRef()

    // useEffect(() => {

    //     const observer  = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             console.log(entry.isIntersecting)
    //         })
    //     },{
    //         threshold : 1
    //     })

    //     observer.observe(ref.current)

    // },[])

    return (
        <div 
            ref={ref}
            className={style.container}>
            <h1>Name Project</h1>
            <div>
                <div className={style.containerImage}>
                    <img className={style.img} src='https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dWl8ZW58MHx8MHx8fDA%3D' alt='#' />
                </div>
                <p>description of project and stack used to build it </p>
            </div>
        </div>
    )
}

export default ProjectModel;