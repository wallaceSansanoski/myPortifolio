import style from './projectModel.module.css'
import { useRef, useEffect } from 'react';

const ProjectModel = ({project : {name, file, description, stacks}}) => {
    //  const ref = useRef()
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
            // ref={ref}
            className={style.container}>
            <h1 className={style.nameProject}>{name}</h1>
            <div>
                <div className={style.containerImage}>
                    <img className={style.img} src={file} alt='image project' />
                </div>
                <div className={style.wrapperBtn}>
                    <button className={style.socialMediaBtn}>Learn More</button>
                    <button className={style.socialMediaBtn}>Git Repository</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectModel;